import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE = "authC";
const LOGIN_PATH = "/login";
const UPGRADE_PATH = "/upgrade";
const decoder = new TextDecoder();

const PREMIUM_PATH_PREFIXES = ["/dashboard/premium", "/api/analysis"];
const PROTECTED_PATH_PREFIXES = ["/dashboard", "/api/analysis"];

function shouldRun(pathname: string) {
  if (pathname.startsWith("/_next")) return false;
  if (pathname === "/favicon.ico") return false;
  return PROTECTED_PATH_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

function parseJson(value: string) {
  try {
    const parsed = JSON.parse(value);
    if (parsed && typeof parsed === "object") return parsed as Record<string, unknown>;
    return null;
  } catch {
    return null;
  }
}

function parseBase64Json(value: string) {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return parseJson(decoder.decode(bytes));
  } catch {
    return null;
  }
}

function decodeSession(raw: string | undefined) {
  if (!raw) return null;

  const direct = parseJson(raw);
  if (direct) return direct;

  try {
    const uriDecoded = parseJson(decodeURIComponent(raw));
    if (uriDecoded) return uriDecoded;
  } catch {
    /* noop */
  }

  const jwtParts = raw.split(".");
  if (jwtParts.length === 3) {
    const payload = parseBase64Json(jwtParts[1] ?? "");
    if (payload) return payload;
  }

  const base64 = parseBase64Json(raw);
  if (base64) return base64;

  return null;
}

function isPremium(session: Record<string, unknown> | null) {
  if (!session) return false;

  const fromBooleanFields = ["isPremium", "premium"]
    .map(key => session[key])
    .find(value => typeof value === "boolean");
  if (typeof fromBooleanFields === "boolean") return fromBooleanFields;

  const fromStringFields = ["plan", "tier", "role"]
    .map(key => session[key])
    .find(value => typeof value === "string") as string | undefined;
  if (fromStringFields && fromStringFields.toLowerCase() === "premium") return true;

  const subscription = session.subscription;
  if (subscription && typeof subscription === "object") {
    const sub = subscription as Record<string, unknown>;
    const status = sub.status;
    if (typeof status === "string" && status.toLowerCase() === "premium") return true;
    const plan = sub.plan;
    if (typeof plan === "string" && plan.toLowerCase() === "premium") return true;
  }

  return false;
}

function needsPremium(pathname: string) {
  return PREMIUM_PATH_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!shouldRun(pathname)) return NextResponse.next();

  const session = decodeSession(request.cookies.get(AUTH_COOKIE)?.value);
  if (!session) {
    const redirect = request.nextUrl.clone();
    redirect.pathname = LOGIN_PATH;
    redirect.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(redirect);
  }

  if (needsPremium(pathname) && !isPremium(session)) {
    const redirect = request.nextUrl.clone();
    redirect.pathname = UPGRADE_PATH;
    redirect.searchParams.set("redirectTo", pathname);
    redirect.searchParams.set("reason", "premium");
    return NextResponse.redirect(redirect);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"]
};
