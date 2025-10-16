import { performance } from "node:perf_hooks";
import * as fs from "node:fs/promises";
import { load, CheerioAPI } from "cheerio";
import { isTag, type AnyNode, type Element as DomElement } from "domhandler";

export async function fetchAndInspect(url: string) {
  const t0 = performance.now();
  const res = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Cheerio-Debug/1.0)",
      "accept": "text/html,*/*;q=0.8",
    },
  });
  const t1 = performance.now();

  const status = `${res.status} ${res.statusText}`;
  const contentType = res.headers.get("content-type") || "unknown";
  const text = await res.text(); // decoding handled by undici
  const t2 = performance.now();

  // Save raw for inspection (optional)
  await fs.writeFile("raw.html", text);

  // ---- Cheerio parse phase ----
  const $: CheerioAPI = load(text);

  // Quick probes
  const title = $("title").first().text().trim();
  const h1s = $("h1").map((_, el) => $(el).text().trim()).get();
  const metaDesc = $('meta[name="description"]').attr("content") || "";
  const links = $("a[href]").slice(0, 10).map((_, el) => $(el).attr("href")).get();

  // A sample extraction: all script tags and their types
  const scripts = $("script").map((_, el) => ({
    type: $(el).attr("type") || "text/javascript",
    hasSrc: Boolean($(el).attr("src")),
    src: $(el).attr("src") || null,
  })).get();

  const t3 = performance.now();

  // Console report
  console.log("=== HTTP ===");
  console.log({ url, status, contentType });
  console.log("Response headers:");
  for (const [k, v] of res.headers) console.log(`  ${k}: ${v}`);

  console.log("\n=== Sizes & Timing ===");
  console.log({
    htmlChars: text.length,
    fetchMs: Math.round(t1 - t0),
    decodeMs: Math.round(t2 - t1),
    cheerioParseMs: Math.round(t3 - t2),
    totalMs: Math.round(t3 - t0),
  });

  console.log("\n=== DOM Summary ===");
  console.log({
    title,
    metaDescription: metaDesc,
    h1Count: h1s.length,
    firstH1: h1s[0] || null,
    linkSampleCount: links.length,
  });

  console.log("\nLink sample (first 10):");
  links.forEach((href, i) => console.log(`${i + 1}. ${href}`));

  console.log("\nScript tags (first 10):");
  scripts.slice(0, 10).forEach((s, i) => console.log(`${i + 1}. ${s.type} | src=${s.src ?? "<inline>"}`));

  console.log('\nSaved raw HTML to "raw.html"');
}


/*
  html-to-prisma.ts
  ------------------
  Turn `htmlOrText` (from hybridFetch) into a machine-readable IR (blocks & sections)
  and produce Prisma-ready inputs. Minimal external deps: cheerio only.

  Assumes Prisma models (simplified):
    - Document { id, name?, locale?, contentType?, sourceUrl?, ... }
    - Block    { id, documentId, sectionId?, order, kind, level?, ordinalPath?, title?, text, html?, anchor? }
    - Section  { id, documentId, headingBlockId (unique), parentId?, level, ordinalPath?, title?, confidence? }

  The IR produced here keeps DB identifiers out of band; use `order`/`headingOrder`
  to correlate blocks and sections once Prisma assigns the actual IDs.
*/

// ---------- IR types ----------
export type BlockKind = "heading" | "paragraph" | "list_item" | "table_row" | "definition" | "unknown";

export interface BlockDraft {
  order: number;          // stream order starting from 1 (synthetic heading may use 0)
  kind: BlockKind;
  level?: number | null;  // heading level 1..6 (or inferred); only for kind='heading'
  ordinalPath?: string | null;
  title?: string | null;  // for headings
  text: string;           // plain text
  html?: string | null;   // raw html snippet for fidelity
  anchor?: Anchor | null; // for overlays later
}

export interface Anchor {
  css?: string;           // simple CSS path (best-effort)
  textQuote?: {
    exact: string;
    prefix?: string;
    suffix?: string;
  };
}

export interface SectionDraft {
  level: number;              // 1..6
  title: string | null;       // copied from heading block
  ordinalPath?: string | null;
  headingOrder: number;       // order of the heading block that opened it
  parentHeadingOrder?: number | null; // order of parent heading block

  // convenience: which blocks (by order) belong here, including the heading itself
  blockOrders: number[];
}

export interface ParseResult {
  blocks: BlockDraft[];
  sections: SectionDraft[];   // hierarchical via parentHeadingOrder
  warnings: string[];
}

// ---------- Public API ----------
export async function htmlToIR(htmlOrText: string, opts?: { sourceUrl?: string; titleFallback?: string }): Promise<ParseResult> {
  const $ = load(wrapIfText(htmlOrText));
  stripNoise($);
  const root = pickRoot($);

  const blocks = domToBlocks($, root);

  // Ensure we have a first heading; if not, synthesize one from <title> or fallback
  if (!blocks.find(b => b.kind === "heading")) {
    const title = ($("title").first().text().trim() || opts?.titleFallback || "Document").slice(0, 140);
    const synthetic: BlockDraft = {
      order: 0,
      kind: "heading",
      level: 1,
      ordinalPath: "1",
      title,
      text: title,
      html: null,
      anchor: { textQuote: { exact: title } }
    };
    // Re-order stream: place synthetic heading at start, shift others by +1
    blocks.forEach(b => (b.order += 1));
    blocks.unshift(synthetic);
  }

  const { sections, warnings } = blocksToSections(blocks);
  return { blocks, sections, warnings };
}

// ---------- DOM → Blocks ----------
export function domToBlocks($: CheerioAPI, root: DomElement): BlockDraft[] {
  const out: BlockDraft[] = [];
  let order = 1;
  const seen = new Set<string>();

  const push = (b: Omit<BlockDraft, "order">) => {
    const dedupeKey = b.anchor?.css ? `${b.kind}:${b.anchor.css}` : `${b.kind}:${b.text}`;
    if (seen.has(dedupeKey)) return;
    seen.add(dedupeKey);

    out.push({ order: order++, ...b });
  };

  const visit = (el: DomElement) => {
    const tag = el.tagName?.toLowerCase() || "";
    if (["script", "style", "noscript", "nav", "header", "footer", "aside"].includes(tag)) return;

    // Headings h1..h6
    if (/^h[1-6]$/.test(tag)) {
      const level = Number(tag[1]);
      const text = $(el).text().replace(/\s+/g, " ").trim();
      if (text) {
        push({ kind: "heading", level, ordinalPath: null, title: text, text, html: $.html(el), anchor: mkAnchor($, el) });
      }
      return; // don't descend further
    }

    // Paragraph-like
    if (tag === "p" || tag === "span" || tag === "div" || tag === "section") {
      if (tag !== "p" && hasBlockishChild(el)) {
        // container element, dive deeper only
        for (const child of el.children || []) visit(child as DomElement);
        return;
      }

      const text = $(el).text().replace(/\s+/g, " ").trim();
      if (text) {
        const words = text.split(/\s+/).length;
        const headingish = looksLikeHeading($, el, text);
        if (words <= 2 && !headingish) return;

        // If looks like a faux heading (short + starts with numbering or bold first child), emit as heading
        if (headingish) {
          const level = inferLevelFromNumbering(text) ?? 2;
          push({ kind: "heading", level, ordinalPath: null, title: text, text, html: $.html(el), anchor: mkAnchor($, el) });
        } else {
          push({ kind: "paragraph", text, html: $.html(el), anchor: mkAnchor($, el) });
        }
      }
      return;
    }

    // Lists
    if (tag === "li") {
      const text = $(el).text().replace(/\s+/g, " ").trim();
      if (text) push({ kind: "list_item", text, html: $.html(el), anchor: mkAnchor($, el) });
    }

    if (tag === "tr") {
      const cells = $(el).find("th,td").map((_, c) => $(c).text().replace(/\s+/g, " ").trim()).get();
      const text = cells.join(" | ");
      if (text) push({ kind: "table_row", text, html: $.html(el), anchor: mkAnchor($, el) });
    }

    if (tag === "dt" || tag === "dd") {
      const text = $(el).text().replace(/\s+/g, " ").trim();
      if (text) push({ kind: "definition", text, html: $.html(el), anchor: mkAnchor($, el) });
    }

    // Recurse
    for (const child of el.children || []) visit(child as DomElement);
  };

  for (const child of (root.children || [])) visit(child as DomElement);
  return out;
}

function looksLikeHeading($: CheerioAPI, el: DomElement, text: string): boolean {
  // numbering / short-line heuristic
  if (
    text.length <= 140 &&
    /^(\d+(?:\.\d+)*|[IVXLC]+|\([a-zivx]+\)|[A-Z])[\.)\-:]?\s+/.test(text)
  ) {
    return true;
  }

  // find first tag child with a proper type guard (no implicit any)
  const firstChild = (el.children ?? []).find(
    (node: AnyNode): node is DomElement => isTag(node)
  );

  if (firstChild && (firstChild.name?.toLowerCase() === "strong" || firstChild.name?.toLowerCase() === "b")) {
    // use Cheerio to get the inline bold text safely (no manual child mapping)
    const strongText = $(firstChild).text().trim();
    if (strongText && strongText.length <= 120) return true;
  }

  return false;
}

function inferLevelFromNumbering(text: string): number | null {
  // naive: depth is count of dots or depth of parenthesis
  const m = text.match(/^(\d+(?:\.\d+)*)/);
  if (m) return Math.min(6, (m[1].split(".").length));
  if (/^\([a-z]\)/i.test(text)) return 3;
  if (/^\([ivx]+\)/i.test(text)) return 4;
  if (/^[IVXLC]+\b/.test(text)) return 2;
  return null;
}

function mkAnchor($: CheerioAPI, el: DomElement): Anchor {
  return {
    css: cssPath($, el),
    textQuote: { exact: $(el).text().slice(0, 120) }
  };
}

function cssPath($: CheerioAPI, el: DomElement): string {
  const parts: string[] = [];
  let cur: DomElement | undefined = el;
  while (cur && cur.tagName && cur.tagName.toLowerCase() !== "html") {
    const tag = cur.tagName.toLowerCase();
    const idx = $(cur).prevAll(tag).length + 1; // nth-of-type index
    parts.unshift(`${tag}:nth-of-type(${idx})`);
    cur = (cur.parent as DomElement) || undefined;
  }
  return parts.length ? parts.join(" > ") : "";
}

function pickRoot($: CheerioAPI): DomElement {
  const candidateSelectors = [
    "main",
    "article",
    "[role='main']",
    ".policy",
    ".policies",
    ".terms",
    "#terms",
    ".content",
    "#content",
    ".legal",
    ".legal-content",
    ".document",
    ".rich-text",
    ".page-content",
  ];

  const scored: Array<{ el: DomElement; score: number }> = [];

  const seen = new Set<DomElement>();
  for (const sel of candidateSelectors) {
    const el = $(sel).first();
    if (el.length) {
      const domEl = el.get(0) as DomElement;
      if (!seen.has(domEl)) {
        seen.add(domEl);
        scored.push({ el: domEl, score: scoreCandidate($, domEl) });
      }
    }
  }

  // Fallback: pick the densest section-like nodes
  if (!scored.length) {
    $("section, div, article").each((_, node) => {
      const domEl = node as DomElement;
      if (seen.has(domEl)) return;
      const score = scoreCandidate($, domEl);
      if (score > 500) {
        seen.add(domEl);
        scored.push({ el: domEl, score });
      }
    });
  }

  const best = scored.sort((a, b) => b.score - a.score)[0];
  return (best?.el ?? $("body").get(0)) as DomElement;
}

function wrapIfText(input: string): string {
  // If it looks like plain text, wrap as minimal HTML so Cheerio can parse uniformly
  if (/<[a-z][\s\S]*>/i.test(input)) return input;
  const safe = input.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<!doctype html><html><head><meta charset="utf-8"></head><body><pre>${safe}</pre></body></html>`;
}

// ---------- Blocks → Sections (stack assembler) ----------
function blocksToSections(blocks: BlockDraft[]): { sections: SectionDraft[]; warnings: string[] } {
  const warnings: string[] = [];
  const sections: SectionDraft[] = [];
  const stack: SectionDraft[] = [];

  const makeSection = (heading: BlockDraft, parent: SectionDraft | null): SectionDraft => {
    const s: SectionDraft = {
      level: heading.level || 1,
      title: heading.title || heading.text || null,
      ordinalPath: heading.ordinalPath || null,
      headingOrder: heading.order,
      parentHeadingOrder: parent ? parent.headingOrder : null,
      blockOrders: [heading.order],
    };
    sections.push(s);
    return s;
  };

  for (const b of blocks) {
    if (b.kind === "heading") {
      const level = b.level || 1;
      // pop until parent has lower level
      while (stack.length && (stack[stack.length - 1].level >= level)) stack.pop();
      const parent = stack[stack.length - 1] || null;
      const s = makeSection(b, parent);
      stack.push(s);
      continue;
    }

    // Non-heading content attaches to current open section
    const cur = stack[stack.length - 1];
    if (!cur) {
      // No open section yet (shouldn't happen after synthetic heading), buffer warning
      warnings.push(`Content before any heading at order ${b.order}`);
      continue;
    }
    cur.blockOrders.push(b.order);
  }

  return { sections, warnings };
}

function stripNoise($: CheerioAPI): void {
  const removeSelectors = [
    "script",
    "style",
    "noscript",
    "iframe",
    "svg",
    "canvas",
    "form",
    "header",
    "footer",
    "nav",
    "aside",
    "dialog",
    "button",
    "[role='banner']",
    "[role='complementary']",
    "[aria-label*='cookie' i]",
  ];
  $(removeSelectors.join(",")).remove();

  const noisyAttributeSelectors = [
    "[class*='cookie']",
    "[class*='consent']",
    "[class*='banner']",
    "[class*='popup']",
    "[class*='modal']",
    "[class*='subscribe']",
    "[class*='newsletter']",
    "[class*='promo']",
    "[class*='advert']",
    "[id*='cookie']",
    "[id*='consent']",
    "[id*='banner']",
    "[id*='popup']",
    "[id*='modal']",
    "[id*='subscribe']",
    "[id*='newsletter']",
    "[id*='promo']",
    "[id*='advert']",
    "[data-component*='cookie']",
  ];

  $(noisyAttributeSelectors.join(",")).each((_, node) => {
    const el = $(node);
    const textLen = el.text().replace(/\s+/g, " ").trim().length;
    if (textLen < 300) {
      el.remove();
    }
  });
}

function hasBlockishChild(el: DomElement): boolean {
  const blockTags = new Set([
    "p",
    "div",
    "section",
    "article",
    "ul",
    "ol",
    "table",
    "tr",
    "thead",
    "tbody",
    "dl",
    "dd",
    "dt",
    "figure",
    "blockquote",
    "header",
    "footer",
    "aside",
    "main",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ]);

  for (const child of el.children || []) {
    if (!isTag(child)) continue;
    const name = child.name?.toLowerCase();
    if (name && blockTags.has(name)) return true;
  }
  return false;
}

function scoreCandidate($: CheerioAPI, el: DomElement): number {
  const text = $(el).text().replace(/\s+/g, " ").trim();
  if (!text) return 0;
  const lengthScore = Math.min(text.length, 50000);
  const headingScore = $(el).find("h1,h2,h3,h4,h5,h6").length * 150;
  const keywordBonus = /terms?|conditions?|privacy|policy|agreement|service|services/i.test(text.slice(0, 2000))
    ? 600
    : 0;
  const depthPenalty = Math.min(depth(el), 6) * 80;
  return lengthScore + headingScore + keywordBonus - depthPenalty;
}

function depth(el: DomElement): number {
  let d = 0;
  let cur: DomElement | null | undefined = el;
  while (cur && cur.parent && (cur.parent as DomElement).tagName) {
    d += 1;
    cur = cur.parent as DomElement;
  }
  return d;
}

