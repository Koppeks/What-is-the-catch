import { load } from "cheerio";

export const fetchBody = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; WhatIsTheCatchBot/1.0; +https://github.com/)",
      Accept: "text/html,application/xhtml+xml",
    },
  });

  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);

  const html = await res.text();
  const $ = load(html);
  $("script, style, link[rel='stylesheet'], noscript, meta").remove();
  const body = $("body").clone().toString();
  const sanitizedHtml = $.html();

  const plainTextBody = body.replace(/<[^>]*>/g, '');

  return { html: sanitizedHtml, plainTextBody };
};

