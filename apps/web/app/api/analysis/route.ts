import { NextRequest, NextResponse } from "next/server";

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