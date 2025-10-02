import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-slate-100">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-base text-slate-300">
          We combed through the terms, but we couldn�t locate the page you were looking for.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-slate-200"
          >
            Go to dashboard
          </Link>
          <Link
            href="/support"
            className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500"
          >
            Contact support
          </Link>
        </div>
      </div>
    </main>
  );
}
