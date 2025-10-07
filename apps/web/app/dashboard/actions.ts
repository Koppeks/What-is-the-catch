"use server";

import { ClausePartial, prisma, TriggerHit } from "@repo/db";
import { CreateCompany, inferCompanyName, inferCompanyWebsite } from "@repo/server";

import util from "util";

type Section = {
  id: string;          // e.g., "2", "2.1", "2.2.3"
  title: string;       // heading text
  text: string;        // current content
  children: Section[]; // nested subsections
};


const HEADING_REGEX = /^\s*(?:\(?([0-9]+(?:\.[0-9]+)*|[a-zA-Z])\)?[.)\-:]?)\s+(.+)$/gm;


function parseHierarchical(input: string): Section[] {
  const matches = [...input.matchAll(HEADING_REGEX)];

  const items = matches.map((m, i) => {
    const id = m[1]!.trim();
    const title = m[2]!.trim();
    const start = m.index! + m[0].length;
    const end = matches[i + 1]?.index ?? input.length;
    const body = input.slice(start, end).trim();
    return { id, title, body };
  });

  const root: Section[] = [];
  const stack: Section[] = [];
  const MAX_TITLE_LENGHT = 70;

  for (const it of items) {
    const level = it.id.split(".").length;
    let node: Section;
    if (it.title.length > MAX_TITLE_LENGHT) node = { id: it.id, title: "", text: normalize(it.title), children: [] };
    else node = { id: it.id, title: it.title, text: normalize(it.body), children: [] };
    // Pop to parent level
    while (stack.length && depth(stack[stack.length - 1]) >= level) stack.pop();

    if (stack.length === 0) {
      root.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  }

  return root;

  function depth(n: Section) { return n.id.split(".").length; }
  function normalize(s: string) {
    return s.replace(/\r\n/g, "\n").replace(/\n{2,}/g, "\n").trim();
  }
}

function findLegalNamePattern(text: string, contextWindow = 25): string[] {
  const suffixPattern = "(?:Inc\\.|LLC|Ltd\\.?|S\\.A\\.|S\\.R\\.L\\.|Corporation|Company|GmbH|Platform)";
  const companyPattern = `[A-Z][A-Za-z0-9&.,\\- ]{2,}${suffixPattern}`;
  const beforePattern = `(?:\\b\\S+\\s+){0,${contextWindow}}`;
  const afterPattern = `(?:\\s+\\S+){0,${contextWindow}}`;

  const LEGAL_NAME_REGEX = new RegExp(`${beforePattern}(${companyPattern})${afterPattern}`, "gm");
  const snippets = [...text.matchAll(LEGAL_NAME_REGEX)].map((match) => match[0].trim()).slice(0,12);
  // console.log(snippets);
  return snippets;
}

function findWebsitePattern(text: string): string[] {
  const websitePattern = /\b((https?:\/\/)?(www\.)?[\w-]+(\.[a-z]{2,})(\/[^\s]*)?)\b/gm;
  const matches = [...text.matchAll(websitePattern)].map((match) => match[0].trim());
  return matches;
}

function evaluateTriggerRules(sections: Section[], rules: ClausePartial[]): TriggerHit[] {

  

  return []
} 

export type FormState = { ok: boolean; error?: string; triggers?: TriggerHit[] };

export async function analyzeActionForm(prev: FormState, formData: FormData): Promise<FormState> {
  const text = String(formData.get("text") ?? "").trim();

  if (text.length < 20) return { ok: false, error: "Text must be at least 20 characters" };

  const parsed = parseHierarchical(text);
  // console.log(util.inspect(parsed, { showHidden: false, depth: null, colors: true }));
  
  // Company name and slug.
  const legalNamePosibilities = findLegalNamePattern(text);
  const companyName = await inferCompanyName(legalNamePosibilities)
  const slug = companyName.replaceAll(" ", "_")

  // Company website
  const websitePosibilities = findWebsitePattern(text);
  const companyWebsite = await inferCompanyWebsite(websitePosibilities)

  const targetCompany = await CreateCompany(companyName, slug, companyWebsite)

  const triggerRules = await prisma.clauseCategory.findMany({ where: { isActive: true } });

  const currentTriggers = evaluateTriggerRules(parsed, triggerRules);

  // console.log(util.inspect(triggerRules, { showHidden: false, depth: null, colors: true }));
  // console.log(util.inspect(currentTriggers, { showHidden: false, depth: null, colors: true }));

  return { ok: true, triggers: currentTriggers };
}
