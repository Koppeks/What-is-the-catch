"use client";

import { useActionState } from "react";
import { analyzeActionForm, type FormState } from "./actions";

type Clause = {
  id: string;
  title: string;
  text: string;
  children: Clause[];
};

function ClauseTree({ clauses }: { clauses: Clause[] }) {
  if (clauses.length === 0) return null;

  return (
    <ol className="space-y-4">
      {clauses.map((clause) => (
        <li key={clause.id} className="space-y-2 border-l pl-4">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              {clause.id}
            </p>
            <h3 className="font-semibold text-slate-900">
              {clause.title || `Clause ${clause.id}`}
            </h3>
          </div>
          {clause.text && (
            <div className="space-y-2 text-sm leading-6 text-slate-700">
              {clause.text.split(/\n{2,}/).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
          {clause.children.length > 0 && (
            <div className="ml-4">
              <ClauseTree clauses={clause.children} />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function DashboardPage() {
  const initialFormState: FormState = { ok: false };
  const [state, formAction] = useActionState(analyzeActionForm, initialFormState);
  const clauses = (state.result as Clause[] | undefined) ?? [];

  return (
    <main className="p-6">
      <form action={formAction} className="grid gap-3 max-w-xl">
        <textarea
          name="text"
          rows={8}
          className="border rounded p-2"
          defaultValue={"https://www.youtube.com/t/terms?hl=en&override_hl=1"}
        />
        <button type="submit" className="rounded bg-black text-white p-2">
          Analyze
        </button>

        {!state.ok && state.error && (
          <p className="text-red-600">{state.error}</p>
        )}
        {state.ok && <p className="text-green-700">Saved!</p>}
      </form>

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">The result of the request:</h2>
        <section className="space-y-4">
          {clauses.length > 0 ? (
            <ClauseTree clauses={clauses} />
          ) : (
            <p className="text-sm text-slate-500">
              Submit a URL or text to see parsed clauses.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
