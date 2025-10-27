"use client";

import { useActionState } from "react";
import { analyzeUrl, getDocumentWithId } from "./actions";
import { RequestResponse } from "@repo/types";

export default function DashboardPage() {
  const initialFormState: RequestResponse = { ok: false };
  const [analyzeResult, analyzeAction] = useActionState(
    analyzeUrl,
    initialFormState
  );
  const [documentState, formDocumentAction] = useActionState(
    getDocumentWithId,
    initialFormState
  );
  return (
    <main className="p-6 w-screen flex">
      <div className="flex-1 justify-items-stretch align-middle m-6 flex flex-col gap-3">
        <form action={analyzeAction} className="grid gap-3 bg-gray-100 p-3">
          <h2 className="text-xl font-semibold">Copy and paste the URL</h2>
          <input
            className="border rounded p-2"
            name="text"
            defaultValue={"https://www.youtube.com/t/terms?hl=en&override_hl=1"}
          />
          <button
            type="submit"
            className="rounded cursor-pointer bg-blue-500 text-white p-2"
          >
            Analyze Document
          </button>

          {!analyzeResult.ok && analyzeResult.error && (
            <p className="text-red-600">{analyzeResult.error}</p>
          )}
        </form>
      </div>
      <div className="flex-1 justify-items-stretch align-middle m-6 ">
        {analyzeResult.ok && (
          <>
            <p className="text-green-700">Saved!</p>
            <p className="text-gray-800 w-full">{analyzeResult.result}</p>
          </>
        )}
      </div>
    </main>
  );
}
