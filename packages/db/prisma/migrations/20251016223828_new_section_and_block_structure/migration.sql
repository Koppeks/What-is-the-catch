/*
  Warnings:

  - You are about to drop the column `headingBlockId` on the `Section` table. All the data in the column will be lost.
  - Added the required column `level` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Section" DROP CONSTRAINT "Section_headingBlockId_fkey";

-- DropIndex
DROP INDEX "public"."Section_headingBlockId_key";

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "headingBlockId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "headingAnchor" JSONB,
ADD COLUMN     "headingHtml" TEXT,
ADD COLUMN     "headingText" TEXT,
ADD COLUMN     "level" INTEGER NOT NULL,
ADD COLUMN     "ordinalPath" TEXT,
ADD COLUMN     "title" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
