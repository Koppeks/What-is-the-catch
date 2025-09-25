import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import {prisma} from "@repo/db"
import { parseTermsAndConditions } from "apps/web/lib/textHelpers";

const BodySchema = z.object({
  text: z.string().min(20, "Not enough context for our system to pick up."),
  source: z.object({
    kind: z.enum(["raw", "url", "file", "html"]).default("raw"),
    name: z.string().optional(),
    url: z.string().url().optional(),
    locale: z.string().optional(),
  }).optional(),
  options: z.object({
    // language: z.string().optional(), 
    fast: z.boolean().optional(), // if true, run inline/light analysis
  }).optional(),
})

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/analysis" });
}

export async function POST(req:NextRequest){
  try {
    return NextResponse.json({ok: true})
  } catch (error) {
    console.log(error)
    return NextResponse.json({ ok: false, error: "Internal error", trigger: error }, { status: 500 });
  }
}