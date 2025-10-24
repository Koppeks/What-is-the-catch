"use client";

import { useActionState } from "react";
import { analyzeUrl, getDocumentWithId } from "./actions";
import { DocumentWithPartialRelations } from "@repo/db";
import {RequestResponse} from "@repo/types"

type ClauseTreeBlockKind = "HEADING" | "PARAGRAPH" | "LIST_ITEM" | "TABLE_ROW";

type ClauseTreeBlock = {
  id: string;
  kind: ClauseTreeBlockKind;
  text: string;
  order: number;
  title?: string | null;
  ordinalPath?: string | null;
};

type ClauseTreeSection = {
  id: string;
  heading: string;
  ordinalLabel: string | null;
  ordinalPath?: string | null;
  createdAt?: Date;
  blocks: ClauseTreeBlock[];
};

function normalizeOrdinalPath(value: string | null | undefined): (string | number)[] {
  if (!value) return [];
  return value.split(".").map((segment) => {
    const numeric = Number(segment);
    return Number.isNaN(numeric) ? segment : numeric;
  });
}

function compareOrdinalPath(a: string | null | undefined, b: string | null | undefined): number {
  const aSegments = normalizeOrdinalPath(a);
  const bSegments = normalizeOrdinalPath(b);

  const maxLength = Math.max(aSegments.length, bSegments.length);
  for (let index = 0; index < maxLength; index += 1) {
    const aValue = aSegments[index];
    const bValue = bSegments[index];

    if (aValue === undefined) return -1;
    if (bValue === undefined) return 1;

    if (typeof aValue === "number" && typeof bValue === "number") {
      if (aValue !== bValue) return aValue - bValue;
      continue;
    }

    const textA = String(aValue);
    const textB = String(bValue);
    if (textA !== textB) return textA.localeCompare(textB);
  }

  return 0;
}

function ClauseTree({ document }: { document: DocumentWithPartialRelations }) {
  if (!document) return null;

  const sections: ClauseTreeSection[] = [...(document.section ?? [])]
    .map((section): ClauseTreeSection | null => {
      if (!section || typeof section.id !== "string") return null;

      const createdAt = section.createdAt instanceof Date ? section.createdAt : undefined;
      const ordinalPathFromSection = typeof section.ordinalPath === "string" ? section.ordinalPath : undefined;
      const level = typeof section.level === "number" ? section.level : undefined;
      const explicitTitle = typeof section.title === "string" ? section.title : undefined;

      const rawBlocks = Array.isArray(section.blocks) ? section.blocks : [];
      const blocks: ClauseTreeBlock[] = rawBlocks
        .map((block): ClauseTreeBlock | null => {
          if (
            !block ||
            typeof block.id !== "string" ||
            typeof block.text !== "string" ||
            typeof block.order !== "number"
          ) {
            return null;
          }

          const rawKind = block.kind ?? "PARAGRAPH";
          const normalizedKind: ClauseTreeBlockKind =
            rawKind === "HEADING" ||
            rawKind === "PARAGRAPH" ||
            rawKind === "LIST_ITEM" ||
            rawKind === "TABLE_ROW"
              ? rawKind
              : "PARAGRAPH";

          return {
            id: block.id,
            text: block.text,
            order: block.order,
            kind: normalizedKind,
            title: block.title ?? null,
            ordinalPath: block.ordinalPath ?? null,
          };
        })
        .filter((block): block is ClauseTreeBlock => block !== null)
        .sort((a, b) => a.order - b.order);

      const headingBlock = blocks.find((block) => block.kind === "HEADING");
      const effectiveOrdinalPath = ordinalPathFromSection ?? headingBlock?.ordinalPath ?? undefined;
      const ordinalLabel = effectiveOrdinalPath ?? null;
      const sectionHeading =
        explicitTitle ??
        headingBlock?.title ??
        headingBlock?.text ??
        (level != null ? `Section ${level}` : "Section");

      return {
        id: section.id,
        heading: sectionHeading,
        ordinalLabel,
        ordinalPath: effectiveOrdinalPath,
        createdAt,
        blocks: blocks.filter((block) => block.kind !== "HEADING"),
      };
    })
    .filter((section): section is ClauseTreeSection => section !== null)
    .sort((a, b) => {
      const order = compareOrdinalPath(a.ordinalPath, b.ordinalPath);
      if (order !== 0) return order;

      const createdA = a.createdAt?.valueOf();
      const createdB = b.createdAt?.valueOf();
      if (createdA != null && createdB != null && createdA !== createdB) {
        return createdA - createdB;
      }

      return a.id.localeCompare(b.id);
    });

  const renderBlock = (block: ClauseTreeBlock) => {
    const key = block.id;
    const paragraphs = block.text
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph, index) => <p key={`${key}-p-${index}`}>{paragraph}</p>);
    const paragraphNodes =
      paragraphs.length > 0 ? paragraphs : [<p key={`${key}-p-0`}>{block.text}</p>];

    const blockKind = block.kind ?? "PARAGRAPH";

    switch (blockKind) {
      case "PARAGRAPH":
        return (
          <div key={key} className="space-y-2">
            {paragraphNodes}
          </div>
        );
      case "LIST_ITEM":
        return (
          <div key={key} className="flex items-start gap-2 pl-2">
            <span aria-hidden className="select-none text-slate-500">&bull;</span>
            <span>{block.text}</span>
          </div>
        );
      case "TABLE_ROW":
        return (
          <div key={key} className="overflow-x-auto rounded bg-slate-100 p-2 text-xs text-slate-800">
            <pre className="whitespace-pre-wrap">{block.text}</pre>
          </div>
        );
      default:
        return (
          <div key={key} className="space-y-2">
            {paragraphNodes}
          </div>
        );
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-900">{document.name}</h3>
      <ol className="space-y-4">
        {sections.map((section) => {
          return (
            <li key={section.id} className="space-y-3 border-l pl-4">
              <div className="space-y-1">
                {section.ordinalLabel && (
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {section.ordinalLabel}
                  </p>
                )}
                <h4 className="font-semibold text-slate-900">{section.heading}</h4>
              </div>
              {section.blocks.length > 0 && (
                <div className="space-y-3 text-sm leading-6 text-slate-700">
                  {section.blocks.map((block) => renderBlock(block))}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function DashboardPage() {
  const initialFormState: RequestResponse = { ok: false };
  const [formState, formAction] = useActionState(analyzeUrl, initialFormState);
  const [documentState, formDocumentAction] = useActionState(getDocumentWithId, initialFormState);
  const document = documentState.result ? (documentState.result as DocumentWithPartialRelations | undefined) : null;

  // function removeDocument () {
  //   formDocumentAction(null) // workarround to reset useActionState
  // }

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

        {!formState.ok && formState.error && (
          <p className="text-red-600">{formState.error}</p>
        )}
        {formState.ok && <p className="text-green-700">Saved!</p>}
      </form>

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Search documents in the DB:</h2>
        <section className="space-y-4">
          {document != null ? (
            <>
              {/* <p onClick={removeDocument}>x</p> */}
              <ClauseTree document={document} />
            </>
          ) : (
            <form action={formDocumentAction} className="grid gap-3 max-w-xl">
              <input
                name="id"
                defaultValue={"cmgu0lylk0000w5ucajeuz565"}
              />
              <button type="submit" className="rounded bg-black text-white p-2">
                Search Document
              </button>

              {!documentState.ok && documentState.error && (
                <p className="text-red-600">{documentState.error}</p>
              )}
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
