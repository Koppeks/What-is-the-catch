import OpenAI from "openai";
import util from "util"

const client = new OpenAI();

export const inferCompanyName = async (texts: string[]): Promise<string> => {
  const response = await client.responses.create({
    model: "gpt-5",
    reasoning: {effort: "low"},
    instructions:"Infer the name of the company from the input. Dont respond with verbosity, don't respond with extra text besides the name of said company.",
    input: `${texts}`,
  });
  console.log(util.inspect(response))
  return ""
}
