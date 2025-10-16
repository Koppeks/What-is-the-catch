import { prisma } from "./client";
import { BlockKind as PrismaBlockKind, TypeRequest, Prisma } from "@prisma/client";

type IRBlock = {
  order: number;
  kind: "heading" | "paragraph" | "list_item" | "table_row" | "definition" | "unknown";
  level?: number | null;
  ordinalPath?: string | null;
  title?: string | null;
  text: string;
  html?: string | null;
  anchor?: unknown;
};

type IRSection = {
  level: number;
  title: string | null;
  ordinalPath?: string | null;
  headingOrder: number;
  parentHeadingOrder?: number | null;
  blockOrders: number[];
};

export type HtmlIR = {
  blocks: IRBlock[];
  sections: IRSection[];
  warnings: string[];
};

export interface PersistDocumentArgs {
  name: string;
  type: TypeRequest;
  locale?: string | null;
  sourceUrl?: string | null;
  ir: HtmlIR;
}

const BLOCK_KIND_MAP: Record<IRBlock["kind"], PrismaBlockKind> = {
  heading: PrismaBlockKind.HEADING,
  paragraph: PrismaBlockKind.PARAGRAPH,
  list_item: PrismaBlockKind.LIST_ITEM,
  table_row: PrismaBlockKind.TABLE_ROW,
  definition: PrismaBlockKind.PARAGRAPH,
  unknown: PrismaBlockKind.PARAGRAPH,
};

const serializeAnchor = (value: unknown): Prisma.InputJsonValue | undefined => {
  if (value == null) return undefined;
  if (typeof value === "object") return value as Prisma.InputJsonValue;
  return undefined;
};

export async function persistDocumentFromIR(args: PersistDocumentArgs): Promise<{ documentId: string }> {
  const { name, type, locale, sourceUrl, ir } = args;

  const blockByOrder = new Map<number, IRBlock>(ir.blocks.map((b) => [b.order, b]));
  const assignedOrders = new Set<number>();

  const orderedSections = [...ir.sections].sort((a, b) => a.headingOrder - b.headingOrder);

  return prisma.$transaction(async (tx) => {
    const document = await tx.document.create({
      data: {
        name,
        type,
        locale: locale ?? null,
        sourceUrl: sourceUrl ?? null,
      },
    });

    const sectionIdByHeadingOrder = new Map<number, string>();

    for (const section of orderedSections) {
      const headingBlock = blockByOrder.get(section.headingOrder);
      if (!headingBlock) continue;

      const parentSectionId =
        section.parentHeadingOrder != null ? sectionIdByHeadingOrder.get(section.parentHeadingOrder) ?? null : null;

      const headingAnchor = serializeAnchor(headingBlock.anchor);
      const sectionRecord = await tx.section.create({
        data: {
          documentId: document.id,
          parentId: parentSectionId,
          level: section.level,
          title: section.title,
          ordinalPath: section.ordinalPath ?? null,
          headingText: headingBlock.text,
          headingHtml: headingBlock.html ?? null,
          ...(headingAnchor !== undefined ? { headingAnchor } : {}),
        },
      });

      await tx.block.create({
        data: {
          documentId: document.id,
          sectionId: sectionRecord.id,
          order: headingBlock.order,
          kind: BLOCK_KIND_MAP[headingBlock.kind],
          level: headingBlock.level ?? null,
          ordinalPath: headingBlock.ordinalPath ?? null,
          title: headingBlock.title ?? null,
          text: headingBlock.text,
          html: headingBlock.html ?? null,
          ...(headingAnchor !== undefined ? { anchor: headingAnchor } : {}),
        },
      });

      const otherBlocks = section.blockOrders
        .filter((order) => order !== section.headingOrder)
        .map((order) => blockByOrder.get(order))
        .filter((block): block is IRBlock => Boolean(block));

      if (otherBlocks.length) {
        await tx.block.createMany({
          data: otherBlocks.map((block) => ({
            documentId: document.id,
            sectionId: sectionRecord.id,
            order: block.order,
            kind: BLOCK_KIND_MAP[block.kind],
            level: block.level ?? null,
            ordinalPath: block.ordinalPath ?? null,
            title: block.title ?? null,
            text: block.text,
            html: block.html ?? null,
            anchor: serializeAnchor(block.anchor),
          })),
        });
      }

      sectionIdByHeadingOrder.set(section.headingOrder, sectionRecord.id);
      assignedOrders.add(section.headingOrder);
      otherBlocks.forEach((block) => assignedOrders.add(block.order));
    }

    const unassignedBlocks = ir.blocks.filter((block) => !assignedOrders.has(block.order));
    if (unassignedBlocks.length) {
      const headingAnchor = serializeAnchor(unassignedBlocks[0].anchor);
      const sectionRecord = await tx.section.create({
        data: {
          documentId: document.id,
          parentId: null,
          level: 1,
          title: "Unassigned",
          ordinalPath: null,
          headingText: unassignedBlocks[0].text,
          headingHtml: unassignedBlocks[0].html ?? null,
          ...(headingAnchor !== undefined ? { headingAnchor } : {}),
        },
      });

      await tx.block.create({
        data: {
          documentId: document.id,
          sectionId: sectionRecord.id,
          order: unassignedBlocks[0].order,
          kind: BLOCK_KIND_MAP[unassignedBlocks[0].kind],
          level: unassignedBlocks[0].level ?? null,
          ordinalPath: unassignedBlocks[0].ordinalPath ?? null,
          title: unassignedBlocks[0].title ?? "Unassigned",
          text: unassignedBlocks[0].text,
          html: unassignedBlocks[0].html ?? null,
          ...(headingAnchor !== undefined ? { anchor: headingAnchor } : {}),
        },
      });

      const trailingBlocks = unassignedBlocks.slice(1);
      if (trailingBlocks.length) {
        await tx.block.createMany({
          data: trailingBlocks.map((block) => ({
            documentId: document.id,
            sectionId: sectionRecord.id,
            order: block.order,
            kind: BLOCK_KIND_MAP[block.kind],
            level: block.level ?? null,
            ordinalPath: block.ordinalPath ?? null,
            title: block.title ?? null,
            text: block.text,
            html: block.html ?? null,
            anchor: serializeAnchor(block.anchor),
          })),
        });
      }
    }

    return { documentId: document.id };
  });
}



