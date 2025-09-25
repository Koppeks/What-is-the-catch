export function parseTermsAndConditions(text: string) {
const regex = /(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n\d+\.|$)/g;
  const result: { title: string; content: string }[] = [];

  let match;
  while ((match = regex.exec(text)) !== null) {
    const title = match[2].trim();
    const content = match[3]
      .replace(/\s+/g, " ")
      .trim();
    result.push({ title, content });
  }

  return result;
}

const URL_RE = /\bhttps?:\/\/[^\s)]+/gi;
const EMAIL_RE = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const COMPANY_LIKE_RE = /\b([A-Z][A-Za-z&.,'’\- ]+(?:Inc\.|LLC|Ltd\.|S\.?A\.|GmbH|S\.?R\.?L\.|S\.?A\.S\.))\b/g;

export function extractUrls(text: string): string[] {
  return (text.match(URL_RE) || []).map(s => s.replace(/[),.]+$/,''));
}
export function extractEmails(text: string): string[] {
  return (text.match(EMAIL_RE) || []).map(s => s.toLowerCase());
}
export function extractCompanyLike(text: string): string[] {
  return Array.from(text.matchAll(COMPANY_LIKE_RE)).map(m => m[1].trim());
}
export function getDomainsFromUrls(urls: string[]): string[] {
  return urls
    .map(u => { try { return new URL(u).hostname.replace(/^www\./,''); } catch { return null; } })
    .filter((x): x is string => !!x);
}
export function getDomainsFromEmails(emails: string[]): string[] {
  return emails.map(e => e.split("@")[1]).filter(Boolean);
}

// tnc-catalog.ts
export type TnCProvider = {
  id: string;                    // "spotify"
  companyNames: string[];        // ["Spotify AB", "Spotify USA Inc."]
  brands: string[];              // ["Spotify"]
  domains: string[];             // ["spotify.com"]
  serviceNames?: string[];       // ["Spotify Free", "Spotify Premium"]
  supportEmails?: string[];      // ["support@spotify.com"]
  legalEntities?: string[];      // explicit strings that appear in T&C
  // Optional advanced:
  simhash?: string;              // text fingerprint of the canonical T&C
  embedding?: number[];          // vector embedding of canonical T&C
  regexHints?: string[];         // custom regex patterns you observed
};

export const CATALOG: TnCProvider[] = [
  {
    id: "spotify",
    companyNames: ["Spotify AB", "Spotify USA Inc."],
    brands: ["Spotify"],
    domains: ["spotify.com"],
    supportEmails: ["support@spotify.com"],
    legalEntities: ["Spotify AB"],
    regexHints: [String.raw`\bSpotify (Terms|TOS|Terms of Use)\b`]
  },
  // add more...
];

type Evidence = { kind: string; value: string; weight: number };
type Result = {
  best?: { provider: TnCProvider; score: number };
  ranking: Array<{ provider: TnCProvider; score: number }>;
  evidenceByProvider: Record<string, Evidence[]>;
};

const WEIGHTS = {
  exactDomain: 5,
  emailDomain: 4,
  brandMention: 3,
  companyMention: 3,
  legalEntity: 4,
  regexHint: 2
};

export function identifyProviderFromText(text: string):Result {
  const lc = text.toLowerCase();
  const urls = extractUrls(text);
  const emails = extractEmails(text);
  const companyLikes = extractCompanyLike(text);
  const urlDomains = new Set(getDomainsFromUrls(urls));
  const emailDomains = new Set(getDomainsFromEmails(emails));

  const evidenceByProvider: Record<string, Evidence[]> = {};

  const add = (id: string, ev: Evidence) => {
    (evidenceByProvider[id] ||= []).push(ev);
  };

  for (const p of CATALOG) {
    const pid = p.id;

    // Domains in links
    for (const d of p.domains) {
      if (urlDomains.has(d)) add(pid, { kind: "exactDomain", value: d, weight: WEIGHTS.exactDomain });
    }

    // Domains in emails
    for (const d of p.domains) {
      if (emailDomains.has(d)) add(pid, { kind: "emailDomain", value: d, weight: WEIGHTS.emailDomain });
    }
    for (const e of (p.supportEmails || [])) {
      if (emails.includes(e.toLowerCase())) add(pid, { kind: "emailDomain", value: e, weight: WEIGHTS.emailDomain });
    }

    // Brand mentions
    for (const b of p.brands) {
      if (lc.includes(b.toLowerCase())) add(pid, { kind: "brandMention", value: b, weight: WEIGHTS.brandMention });
    }

    // Company/legal entity mentions
    for (const ce of (p.companyNames || [])) {
      if (lc.includes(ce.toLowerCase())) add(pid, { kind: "companyMention", value: ce, weight: WEIGHTS.companyMention });
    }
    for (const le of (p.legalEntities || [])) {
      if (lc.includes(le.toLowerCase())) add(pid, { kind: "legalEntity", value: le, weight: WEIGHTS.legalEntity });
    }

    // Regex hints (titles, specific clauses)
    for (const pattern of (p.regexHints || [])) {
      const re = new RegExp(pattern, "i");
      if (re.test(text)) add(pid, { kind: "regexHint", value: pattern, weight: WEIGHTS.regexHint });
    }

    // Bonus: company-like strings that match companyNames fuzzily
    // (simple contains/normalize is often enough; add fuzzy lib if needed)
    for (const found of companyLikes) {
      if ((p.companyNames || []).some(c => found.toLowerCase().includes(c.toLowerCase().replace(/\./g,'')))) {
        add(pid, { kind: "companyMention", value: found, weight: WEIGHTS.companyMention });
      }
    }
  }

  const ranking = Object.entries(evidenceByProvider)
    .map(([id, evs]) => {
      const provider = CATALOG.find(p => p.id === id)!;
      const score = evs.reduce((s, e) => s + e.weight, 0);
      return { provider, score };
    })
    .sort((a, b) => b.score - a.score);

  return { best: ranking[0], ranking, evidenceByProvider };
}