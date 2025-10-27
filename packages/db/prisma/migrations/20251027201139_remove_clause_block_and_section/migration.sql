/*
  Warnings:

  - You are about to drop the column `clauseCategoryId` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the `Block` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClauseCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hitterId` to the `Trigger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Block" DROP CONSTRAINT "Block_documentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Block" DROP CONSTRAINT "Block_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Section" DROP CONSTRAINT "Section_documentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Section" DROP CONSTRAINT "Section_parentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Trigger" DROP CONSTRAINT "Trigger_clauseCategoryId_fkey";

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "clauseCategoryId",
ADD COLUMN     "hitterId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Block";

-- DropTable
DROP TABLE "public"."ClauseCategory";

-- DropTable
DROP TABLE "public"."Section";

-- CreateTable
CREATE TABLE "Hitter" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "version" TEXT NOT NULL DEFAULT '0.0.1',
    "defaultScoring" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "label" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "triggerInstruction" TEXT NOT NULL,
    "triggerKeywords" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hitter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hitter_slug_key" ON "Hitter"("slug");

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_hitterId_fkey" FOREIGN KEY ("hitterId") REFERENCES "Hitter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
