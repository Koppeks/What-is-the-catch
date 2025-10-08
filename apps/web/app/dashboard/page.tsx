"use client"

import { useActionState } from "react";
import { analyzeActionForm, type FormState } from "./actions";

export default function DashboardPage(){
  const initialFormState: FormState = {ok:false} 
  const [state, formAction] = useActionState(analyzeActionForm, initialFormState);

  return (
    <main className="p-6">
      <form action={formAction} className="grid gap-3 max-w-xl">
        <textarea name="text" rows={8} className="border rounded p-2" />
        <button type="submit" className="rounded bg-black text-white p-2">
          Analyze
        </button>

        {!state.ok && state.error && (
          <p className="text-red-600">{state.error}</p>
        )}
        {state.ok && <p className="text-green-700">Saved!</p>}
      </form>

      <div>
        <h2>The result of the request:</h2>
        <section>
          {/* {state.result} */}
        </section>
      </div>

    </main>
  );
}