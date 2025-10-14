import { Cheerio, load } from "cheerio";
import type { Element as CheerioElement } from "domhandler";

type Clause = {
  id: string;          // e.g., "2", "2.1", "2.2.3"
  title: string;       // heading text
  text: string;        // current content
  children: Clause[]; // nested subsections
};

export const initStripper = async (url: string) => {
  const res = await fetch(url, {
    headers: { "User-Agent": "WhatIsTheCatch/1.0" },
  });

  const ct = res.headers.get("content-type") || "";
  const buf = Buffer.from(await res.arrayBuffer());

  if (ct.includes("application/pdf") || url.toLowerCase().endsWith("pdf")) {
    // If pdf, go for pdf-parse package and go from there
    console.log("The stripper found a pdf.");
    return;
  }

  return clauseFromHtml(buf.toString("utf-8"));
};

const clauseFromHtml = (html: string): Clause[] => {
  const $ = load(html);

  // Remove junk from source
  $(
    "script,style,noscript,svg,nav,footer,header,aside,[aria-hidden=true],[role=dialog],.cookie,.consent"
  ).remove();

  const root: Cheerio<CheerioElement> = $(
    "main,article,[role=main],.content,.terms,.policy,.container"
  ).first().length
    ? $(
        "main,article,[role=main],.content,.terms,.policy,.container"
      ).first()
    : $("body");

  const sections = buildSectionsFromHeadings($, root);
  return sections

};

// --- helpers ---

type TriggerSets = Record<string, string[]>;

export type TriggerHit = {
  category: string;       // trigger group key
  trigger: string;        // trigger text you provided
  match: string;          // exact matched substring in the text
  paragraph: string;      // full paragraph (trimmed)
  paragraphIndex: number; // 0-based
  paragraphStart: number; // absolute start offset (trimmed paragraph) in `text`
  paragraphEnd: number;   // absolute end offset (trimmed paragraph) in `text`
  matchStart: number;     // absolute start offset of the match in `text`
  matchEnd: number;       // absolute end offset of the match in `text`
};

const paragraphSplitter = (text: string): { paragraph: string; start: number; end: number; }[] => {
  // Split on blank lines, keep offsets
  const out: { paragraph: string; start: number; end: number; }[] = [];
  const parts = text.split(/\r?\n\s*\r?\n/g);
  let cursor = 0;

  for (const p of parts) {
    // find this paragraph starting at or after cursor
    const idx = text.indexOf(p, cursor);
    const start = idx === -1 ? cursor : idx;
    const end = start + p.length;
    out.push({ paragraph: p, start, end });
    cursor = end + 2; // skip presumed \n\n separator safely
  }
  return out;
};

function buildSectionsFromHeadings(source: ReturnType<typeof load>, root: Cheerio<CheerioElement>): Clause[] {
  const headingSection = root.find("h1,h2,h3,h4,h5,h6").toArray();
  if (headingSection.length === 0) return [] as Clause[];

  const flats = headingSection.map((hs, i) => {
    const id = `${i + 1}`;
    const sourceh = source(hs);
    const level = Number(hs.tagName.slice(1) || 6);
    const title = sourceh.text().trim();
    const text = textUntilNextHeading(source, sourceh);
    return {id, level, title, text, children: [] as Clause[] };
  });

  // Build hierarchy via heading levels (h1>h2>h3…)
  const main: Clause[] = [];
  const stack: Clause[] = [];
  const MAX_TITLE_LENGHT = 70;

  for (const sectionUnit of flats) {
    const level = sectionUnit.id.split(".").length;
    let node: Clause;
    if (sectionUnit.title.length > MAX_TITLE_LENGHT) node = { id: sectionUnit.id, title: "", text: normalize(sectionUnit.title), children: [] };
    else node = { id: sectionUnit.id, title: sectionUnit.title, text: normalize(sectionUnit.text), children: [] };
    // Pop to parent level
    while (stack.length && depth(stack[stack.length - 1]) >= level) stack.pop();

    if (stack.length === 0) {
      main.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  }
  return main
}

function textUntilNextHeading(source: ReturnType<typeof load>, root: Cheerio<CheerioElement>) {
  const parts: string[] = [];
  let n = root.next();
  while (n.length && !/^h[1-6]$/i.test(n[0].tagName || "")) {
    if (!n.is("script,style,nav,footer,header,aside,[aria-hidden=true],[role=dialog]")) {
      const t = n.text().trim();
      if (t) parts.push(t);
    }
    n = n.next();
  }
  return parts.join("\n\n");
}

// function normalize(s: string) {
//   return s.replace(/\r\n/g, "\n").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
// }

function inferTitle(text: string) {
  const firstSentence = (text.split(/\.\s|\n/)[0] || "").trim();
  return firstSentence.split(/\s+/).slice(0, 10).join(" ") || "Clause";
}

function depth(n: Clause) { return n.id.split(".").length; }

function normalize(s: string) {
  return s.replace(/\r\n/g, "\n").replace(/\n{2,}/g, "\n").trim();
}