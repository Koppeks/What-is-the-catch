/*
  Warnings:

  - You are about to drop the `CategoryHit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClauseAnalysis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriggerHit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `from` to the `DocumentTrigger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `DocumentTrigger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CategoryHit" DROP CONSTRAINT "CategoryHit_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CategoryHit" DROP CONSTRAINT "CategoryHit_clauseAnalysisId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ClauseAnalysis" DROP CONSTRAINT "ClauseAnalysis_clauseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ClauseAnalysis" DROP CONSTRAINT "ClauseAnalysis_runId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TriggerHit" DROP CONSTRAINT "TriggerHit_clauseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TriggerHit" DROP CONSTRAINT "TriggerHit_triggerId_fkey";

-- AlterTable
ALTER TABLE "DocumentTrigger" ADD COLUMN     "from" INTEGER NOT NULL,
ADD COLUMN     "to" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."CategoryHit";

-- DropTable
DROP TABLE "public"."ClauseAnalysis";

-- DropTable
DROP TABLE "public"."TriggerHit";
