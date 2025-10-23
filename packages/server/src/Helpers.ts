import { CheerioAPI } from "cheerio";
import { createHash } from "node:crypto";
import { DomHealth } from "./AnalyzeDocument";

export const assessDomHealth = ($: CheerioAPI, html: string): DomHealth => {
  const rawCharCount = html.length;

  const text = $("body").text().replace(/\s+/g, " ").trim();
  const textCharCount = text.length;
  const headingCount = $("h1, h2, h3, h4, h5, h6").length;
  const scriptCount = $("script").length;
  const hasLegalNumbering =
    /(^|\n)\s*(\d+(?:\.\d+)*|[IVXLC]+|[A-Z]|\([a-zivx]+\))\s*[\.)\-:]\s+/i.test(
      $("body").text()
    );

  // For now, numbers are arbitrary, will be tweeked later on
  const failures: string[] = [];
  if(textCharCount < 2000) failures.push("text-too-short");
  if(headingCount < 5 && !hasLegalNumbering) failures.push("no-headings-no-numbering");
  if(scriptCount > 40 && textCharCount < 1500) failures.push("script-heavy-sparse");

  return {rawCharCount, textCharCount,headingCount,scriptCount,hasLegalNumbering,failures}
};

export const guessLang = ($: CheerioAPI): string | null => {
  const fromHtml = $("html").attr("lang") || $("html").attr("xml:lang");
  const meta = $('meta[http-equiv="content-language"]').attr("content");
  return (fromHtml || meta)?.toLocaleLowerCase() || null;
};

export const canonicalFromDoc = ($: CheerioAPI): string | null => {
  const canonical = $('link[rel="canonical"]').attr("href");
  return canonical || null;
};

export const normalizeForHash = (html: string): string => {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\s+/g, " ")
    .trim();
};

export const sha256 = (input: string): string => {
  return createHash("sha256").update(input).digest("hex")
}