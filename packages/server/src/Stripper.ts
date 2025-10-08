import { Cheerio, load } from "cheerio";
import type { Element as CheerioElement } from "domhandler";

type Clause = {
  title: string;
  content: string;
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
  const source = load(html);

  // Remove junk from source
  source(
    "script,style,noscript,svg,nav,footer,header,aside,[aria-hidden=true],[role=dialog],.cookie,.consent"
  ).remove();

  const root: Cheerio<CheerioElement> = source(
    "main,article,[role=main],.content,.terms,.policy,.container"
  ).first().length
    ? source(
        "main,article,[role=main],.content,.terms,.policy,.container"
      ).first()
    : source("body");

  const sections = buildSectionsFromHeadings(source, root);

    if (sections.length >= 2) {
      return sections.map((s) => ({
        title: s.title || inferTitle(s.text),
        content: s.text
      }));
    }

  const text = normalize(source.text());
  return [{title: "", content: ""}]
  //Or fallback here to handle text
};

// --- helpers ---

function buildSectionsFromHeadings(source: ReturnType<typeof load>, $root: Cheerio<CheerioElement>) {
  const hs = $root.find("h1,h2,h3,h4,h5,h6").toArray();
  type Sec = { level: number; title: string; text: string; children: Sec[] };
  if (hs.length === 0) return [] as Sec[];

  const flats = hs.map((h, i) => {
    const sourceh = source(h);
    const level = Number(h.tagName.slice(1) || 6);
    const title = sourceh.text().trim();
    const text = textUntilNextHeading(source, sourceh);
    return { level, title, text, children: [] as Sec[] };
  });

  // Build hierarchy via heading levels (h1>h2>h3…)
  const root: Sec[] = [];
  const stack: Sec[] = [];
  for (const f of flats) {
    while (stack.length && stack[stack.length - 1].level >= f.level) stack.pop();
    if (stack.length === 0) root.push(f);
    else stack[stack.length - 1].children.push(f);
    stack.push(f);
  }

  // Flatten to top-level clauses; you can keep hierarchy if you need it
  return root.map(r => ({ level: r.level, title: r.title, text: normalize(r.text), children: r.children }));
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

function normalize(s: string) {
  return s.replace(/\r\n/g, "\n").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function inferTitle(text: string) {
  const firstSentence = (text.split(/\.\s|\n/)[0] || "").trim();
  return firstSentence.split(/\s+/).slice(0, 10).join(" ") || "Clause";
}
