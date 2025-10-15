/*
  Warnings:

  - You are about to drop the `Clause` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Clause" DROP CONSTRAINT "Clause_documentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Clause" DROP CONSTRAINT "Clause_parentId_fkey";

-- DropTable
DROP TABLE "public"."Clause";

-- CreateTable
CREATE TABLE "Block" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "parentId" TEXT,
    "ordinalPath" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "depth" INTEGER NOT NULL,
    "meta" JSON,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Block_documentId_depth_order_idx" ON "Block"("documentId", "depth", "order");

-- CreateIndex
CREATE INDEX "Block_documentId_ordinalPath_idx" ON "Block"("documentId", "ordinalPath");

-- AddForeignKey
ALTER TABLE "Block" ADD CONSTRAINT "Block_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Block" ADD CONSTRAINT "Block_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Block"("id") ON DELETE CASCADE ON UPDATE CASCADE;
