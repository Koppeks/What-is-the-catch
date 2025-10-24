import { load } from "cheerio";
import {RequestResponse} from "@repo/types"

export const fetchBody = async (url: string): Promise<RequestResponse> => {
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

  //Can remove anything from the html
  $("script, style, link[rel='stylesheet'], noscript, meta").remove();
  $("h1, h2, h3, h4, h5, h6, [role='heading']").remove()
  $("nav").remove()

  const sanitizedHtml = $.html();

  const body = $("body").clone();
  const bodyHtml = body.html()

  if(!bodyHtml) return {ok: false, error: "No body was present"}

    const plainTextBody = bodyHtml
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|section|article)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();

  return { ok:true, result: {html: sanitizedHtml, plainTextBody} };
};

const manualRemoveTags = () => {

}
