"use server";

const util = require('util')

type Section = {
  id: string;          // e.g., "2", "2.1", "2.2.3"
  title: string;       // heading text
  text: string;        // current content
  children: Section[]; // nested subsections
};

const HEADING_REGEX = /^\s*(\d+(?:\.\d+)*)(?:[.)\-:])?\s+(.+)$/gm;

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
  const MAX_TITLE_LENGHT = 70
  
  for (const it of items) {
    const level = it.id.split(".").length;
    let node:Section
    if(it.title.length > MAX_TITLE_LENGHT) node = { id: it.id, title: "", text: normalize(it.title), children: [] };
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

  console.log(util.inspect(root, {showHidden: false, depth: null, colors: true}))

  return root;

  function depth(n: Section) { return n.id.split(".").length; }
  function normalize(s: string) {
    return s.replace(/\r\n/g, "\n").replace(/\n{2,}/g, "\n").trim();
  }
}

export type FormState = {ok: boolean, error?: string}

export async function analyzeActionForm(prev: FormState, formData:FormData):Promise<FormState>{
  const text = String(formData.get("text") ?? "").trim()

  if(text.length < 20) return {ok:false, error: "Text must be at least 20 characters"}

  const parsed = parseHierarchical(text)
  // console.log(parsed)
  return {ok: true}
}