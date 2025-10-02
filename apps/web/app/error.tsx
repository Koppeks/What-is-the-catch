"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-slate-100">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Something went wrong</h1>
        <p className="mt-4 text-base text-slate-300">
          We hit an unexpected snag while analyzing the terms. You can try again or head back to the dashboard.
        </p>
        {error?.digest && (
          <p className="mt-2 text-xs text-slate-500">Error ID: {error.digest}</p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-slate-200"
          >
            Retry
          </button>
          <Link
            href="/"
            className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
