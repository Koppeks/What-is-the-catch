/*
  Warnings:

  - You are about to drop the column `depth` on the `Block` table. All the data in the column will be lost.
  - You are about to drop the column `meta` on the `Block` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Block` table. All the data in the column will be lost.
  - Added the required column `kind` to the `Block` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sectionId` to the `Block` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BlockKind" AS ENUM ('HEADING', 'PARAGRAPH', 'LIST_ITEM', 'TABLE_ROW');

-- DropForeignKey
ALTER TABLE "public"."Block" DROP CONSTRAINT "Block_parentId_fkey";

-- DropIndex
DROP INDEX "public"."Block_documentId_depth_order_idx";

-- DropIndex
DROP INDEX "public"."Block_documentId_ordinalPath_idx";

-- AlterTable
ALTER TABLE "Block" DROP COLUMN "depth",
DROP COLUMN "meta",
DROP COLUMN "parentId",
ADD COLUMN     "anchor" JSONB,
ADD COLUMN     "html" TEXT,
ADD COLUMN     "kind" "BlockKind" NOT NULL,
ADD COLUMN     "level" INTEGER,
ADD COLUMN     "sectionId" TEXT NOT NULL,
ALTER COLUMN "ordinalPath" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "headingBlockId" TEXT NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Section_headingBlockId_key" ON "Section"("headingBlockId");

-- CreateIndex
CREATE INDEX "Block_documentId_order_idx" ON "Block"("documentId", "order");

-- CreateIndex
CREATE INDEX "Block_sectionId_order_idx" ON "Block"("sectionId", "order");

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_headingBlockId_fkey" FOREIGN KEY ("headingBlockId") REFERENCES "Block"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Block" ADD CONSTRAINT "Block_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
