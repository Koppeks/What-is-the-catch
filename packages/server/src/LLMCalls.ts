import util from "util";
import { env } from "@repo/config";

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