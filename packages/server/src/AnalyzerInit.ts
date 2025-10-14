import { performance } from "node:perf_hooks";
import { load } from "cheerio";
import { assessDomHealth, canonicalFromDoc, guessLang, normalizeForHash, sha256 } from "./Helpers";

// ---- Types ----
export type FetchMethod = "http" | "headless";

export interface FetchMeta {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  timing: {
    fetchMs: number;
    cheerioParseMs: number;
    totalMs: number;
    headlessMs?: number;
  };
  encoding?: string | null;
  languageGuess?: string | null;
  etag?: string | null;
  lastModified?: string | null;
  canonicalUrl?: string | null;
  robotsStatus?: "unknown" | "allowed" | "disallowed";
  pageHash: string;
}

// ---- Health check model ----
export interface DomHealth {
  rawCharCount: number;
  textCharCount: number;
  headingCount: number;
  scriptCount: number;
  hasLegalNumbering: boolean;
  failures: string[]; // which gates failed
}

export interface FetchResult {
  finalUrl: string;
  contentType: string;
  htmlOrText: string; // HTML for HTML-ish types, plain text otherwise
  fetchMethod: FetchMethod;
  meta: FetchMeta;
  health: DomHealth;
  confidence: "ok" | "sparse" | "blocked" | "pdf" | "redirected";
}

// ---- CONSTANTS ----
const DEFAULT_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36";
const ACCEPT = "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8";
const ACCEPT_LANGUAGE = "es-AR,es;q=0.9,en;q=0.8";
const SIZE_LIMIT_BYTES = 5 * 1024 * 1024; // 5MB

// ---- PUBLIC API ----
export const hybridFetcher = async (url: string): Promise<FetchResult> => {
  // const start = performance.now();
  const http = await fetchHttp(url);
  let result: FetchResult = http;

  if (http.contentType.startsWith("text/html")) {
    return {
      ...http,
      confidence: http.confidence.includes("pdf") ? "pdf" : "ok",
    };
  }

  const sparse = http.health.failures.length >= 2;
  if (!sparse) {
    return { ...http, confidence: "ok" };
  }

  const headless = await fetchHeadlessSafe(url);

  if (headless) {
    const confidence: FetchResult["confidence"] =
      headless.health.failures.length >= 2 ? "sparse" : "ok";
    result = { ...http, confidence };
  } else {
    result = { ...http, confidence: "sparse" };
  }

  return result;
};

const fetchHttp = async (url: string): Promise<FetchResult> => {
  const t0 = performance.now();

  const res = await fetch(url, {
    headers: {
      "user-agent": DEFAULT_UA,
      accept: ACCEPT,
      "accepted-language": ACCEPT_LANGUAGE,
      "cache-control": "no-cache",
    },
  });

  const contentType = res.headers.get("content-type") || "unknown";
  const encoding = res.headers.get("content-encoding");
  const etag = res.headers.get("etag");
  const lastModified = res.headers.get("last-modified");

  // -- Size Limit
  const ab = await res.arrayBuffer();
  if (ab.byteLength > SIZE_LIMIT_BYTES) {
    throw new Error(`Body too large: ${Math.round(ab.byteLength / 1020)}KB`);
  }

  let text = new TextDecoder("utf-8").decode(new Uint8Array(ab));

  const t1 = performance.now();
  const $ = load(text);
  const t2 = performance.now();

  const health = assessDomHealth($, text);
  const headers = Object.fromEntries(res.headers.entries());

  const meta: FetchMeta = {
    status: res.status,
    statusText: res.statusText,
    headers,
    timing: {
      fetchMs: Math.round(t1 - t0),
      cheerioParseMs: Math.round(t2 - t1),
      totalMs: Math.round(t2 - t0),
    },
    encoding,
    languageGuess: guessLang($),
    etag,
    lastModified,
    canonicalUrl: canonicalFromDoc($) || headers["content-location"] || null,
    robotsStatus: "unknown",
    pageHash: sha256(normalizeForHash(text)),
  };

  return {
    finalUrl: res.url,
    contentType,
    htmlOrText: text,
    fetchMethod: "http",
    meta,
    health,
    confidence: "ok",
  };
};

// ---- Headless fallback with playwright ----
const fetchHeadlessSafe = async (url: string): Promise<FetchResult | null> => {
  try {
    const { chromium } = await import("playwright");
    const t0 = performance.now();

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1366, height: 900 },
      locale: "es-AR",
      userAgent: DEFAULT_UA,
    });

    // Block heavy resources
    await context.route("**/*", (route) => {
      const type = route.request().resourceType();
      if (["image", "font", "media"].includes(type)) return route.abort();
      return route.continue();
    });

    const page = await context.newPage();
    const resp = await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    // Stabilize minimal content
    await page
      .waitForFunction(
        () => document.body && document.body.innerText.length > 2000,
        { timeout: 10000 }
      )
      .catch(() => void 0);

    const content = await page.content();
    const finalUrl = page.url();

    const t1 = performance.now();
    const $ = load(content);
    const t2 = performance.now();

    const headers: Record<string, string> = {};
    const status = resp?.status() ?? 0;
    const statusText = resp && (await resp.text()) ? "OK" : "";

    const health = assessDomHealth($, content);

    const meta: FetchMeta = {
      status,
      statusText,
      headers,
      timing: {
        fetchMs: Math.round(t1 - t0),
        cheerioParseMs: Math.round(t2 - t1),
        totalMs: Math.round(t2 - t0),
        headlessMs: Math.round(t1 - t0),
      },
      languageGuess: guessLang($),
      canonicalUrl: canonicalFromDoc($),
      robotsStatus: "unknown",
      pageHash: sha256(normalizeForHash(content)),
    };

    await context.close();
    await browser.close();

    return {
      finalUrl,
      contentType: "text/html",
      htmlOrText: content,
      fetchMethod: "headless",
      meta,
      health,
      confidence: "ok",
    };
  } catch (err) {
    // playwright missing or navigation failed
    return null;
  }
};



// TO-DO

// [] Add robots.txt check
// [] PDF handler