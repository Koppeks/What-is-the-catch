import util from "util";
import { env } from "@repo/config";
import { format } from "path";

const ollamaBase = env.OLLAMA_ROUTE_URL ?? env.OLLAMA_ROUTE_LOCAL;
const OLLAMA_URL = `${ollamaBase}/api/generate`;

export const inferCompanyName = async (texts: string[]): Promise<string> => {
  const prompt = `Infer the name of the company from the following text(s).
Respond only with the company's name, nothing else.\n\n${texts.join("\n")}`;

  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama request failed: ${response.statusText}`);
  }

  const data = await response.json();
  // console.log(util.inspect(data));

  // Ollama’s non-stream response contains `response` with the model’s text
  return data.response?.trim() ?? "";
};

export const inferCompanyWebsite = async (texts: string[]):Promise<string> => {
const prompt = `Infer the website of the company from the following scraped website(s).
Respond only with the company's website with protocol, subdomain and domain name, 
avoid all path/page and parameters.\n\n${texts.join("\n")}`;

  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama request failed: ${response.statusText}`);
  }

  const data = await response.json();
  // console.log(util.inspect(data));

  // Ollama’s non-stream response contains `response` with the model’s text
  return data.response?.trim() ?? "";
}

export const inferCleanClauses = async (text: string): Promise<{clauseTitle: string, clauseContent:string}[]> => {
  let sections:{clauseTitle: string, clauseContent:string}[];

  const prompt = `
  From the following Terms and Conditions text, extract each clause as:
  [
    {
      "clauseTitle": string,
      "clauseContent": string
    },
    {n...}
  ]

  Rules:
  - Ignore extras that dont have a clause or are only explainatory text like “Dated:”, “Version”, “Table of contents”, etc.
  - 

  Text:
  """${text}"""
  `;

  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false,
      format: "json"
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama request failed: ${response.statusText}`);
  }

  const data = await response.json();

  // Ollama’s non-stream response contains `response` with the model’s text
  return JSON.parse(data.response?.trim()) ?? "";
}

export const stripContent = async (body: string):Promise<string> => {
const prompt = `
You are an HTML-to-JSON extractor. Given an HTML <body> string, return the object below by extracting ONLY visible contractual text for Terms & Conditions. Do not paraphrase or reorder content.

INPUTS
- BODY_HTML: ${body}

OUTPUT SHAPE (JSON you will return)
{
  "name": "",
  "legalName": "",
  "locale": "",
  "type": "LLM_SCRAPE",
  "sections": [
    { "title": "…", "blocks": ["…", "…"] }
  ],
  "isWebsiteCorrect": true
}

EXTRACTION RULES
1) Content fidelity
   - Decode HTML entities; remove tags but keep their text.
   - Keep wording and numbering exactly as in source (e.g., “1.”, “1.1”, “(a)”, “(i)” stay).
   - Trim leading/trailing spaces; collapse multiple spaces to one; keep line breaks only when they exist inside the same paragraph/list item.

2) What to exclude
   - Navigation, header, footer, menus, cookie banners, newsletter/signup, search, breadcrumbs, pagination, unrelated legal footers.
   - Scripts, styles, hidden elements (display:none, aria-hidden="true"), icons/SVGs without text.
   - Table of contents lists that only link to headings without additional contractual text.

3) Section detection
   - New section starts at each heading <h1>–<h6>. Title = exact heading text.
   - A section spans from its heading until the next heading of SAME or HIGHER level.
   - Subheadings (lower-level) start NEW sections (do not nest).
   - If there’s text before the first heading, create a section with no "title" and put that text in "blocks".
   - Only include "blocks" if the section has textual content under it (p, li, dd/dt, standalone text nodes).

4) Blocks
   - Each paragraph <p>, list item <li>, or definition <dd>/<dt> becomes one block string.
   - Lists: one <li> → one block (keep bullet/numbering text if present in markup).
   - Tables containing contractual content: one row → one block; join cells with " — ".
   - Convert <br><br> sequences into a single newline within the same block.

5) Company fields
   - "name": public brand text explicitly present (logo alt, page title, heading, or brand mentions). Don’t invent from the domain.
   - "legalName": formal registered entity name only if stated verbatim (e.g., “XYZ Technologies LLC”). Otherwise "".

6) Locale
   - Prefer <html lang>. If missing, use explicit language notices on the page (e.g., “Última actualización”, “Last updated”).
   - If still unclear, infer language of the majority of extracted content; use ISO code (e.g., "en", "es", "pt-BR"). If unsure, "".

7) isWebsiteCorrect
   - true if the document is primarily Terms/Terms of Service/Terms of Use/General Conditions/User Agreement/EULA (look at headings/title and dominant content).
   - false if it’s primarily Privacy Policy, Cookies, Help/FAQ, Blog, Homepage, or unrelated.
   - If false: set "name", "legalName", "locale" = "", and "sections" = [].

8) Mixed documents
   - If the page includes multiple policies, keep ONLY the Terms/Conditions sections and ignore Privacy/Cookies/Help.

9) URL signal (weak)
   - Use URL patterns (/terms, /tos, /terms-of-service, /user-agreement) only as a tie-breaker if content is ambiguous. If the text contradicts the URL, follow the text.

10) Type
   - Always set "type" to "LLM_SCRAPE".

RETURN
- A single JSON object conforming to the OUTPUT SHAPE above.
    `;

  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false,
      format: "json"
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama request failed: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(util.inspect(data));

  // Ollama’s non-stream response contains `response` with the model’s text
  return data.response?.trim() ?? "";
}