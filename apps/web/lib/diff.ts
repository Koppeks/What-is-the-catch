import crypto from "node:crypto";
import { diffWords } from "diff";

export function normalizeHtml(html: string) {
  return html.replace(/\s+/g, " ").trim();
}
export function sha256(s: string) {
  return crypto.createHash("sha256").update(s).digest("hex");
}
export function diffHtml(prev: string, next: string) {
  return diffWords(prev, next); // returns array of hunks
}
