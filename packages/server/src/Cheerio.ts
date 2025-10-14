import { performance } from "node:perf_hooks";
import * as fs from "node:fs/promises";
import { load, CheerioAPI } from "cheerio";

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