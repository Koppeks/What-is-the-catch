/*
  Warnings:

  - You are about to drop the column `analysisRequestId` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `categories` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `riskScore` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `severity` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `triggerWarning` on the `Clause` table. All the data in the column will be lost.
  - You are about to drop the column `clauseTypeId` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the `AnalysisRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClauseType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnalysisRequestToTrigger` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `depth` to the `Clause` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documentId` to the `Clause` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ordinalPath` to the `Clause` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Clause` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Clause` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clauseCategoryId` to the `Trigger` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DocumentKind" AS ENUM ('TOS', 'PRIVACY', 'COOKIE', 'EULA', 'OTHER');

-- DropForeignKey
ALTER TABLE "public"."Clause" DROP CONSTRAINT "Clause_analysisRequestId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Trigger" DROP CONSTRAINT "Trigger_clauseTypeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AnalysisRequestToTrigger" DROP CONSTRAINT "_AnalysisRequestToTrigger_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AnalysisRequestToTrigger" DROP CONSTRAINT "_AnalysisRequestToTrigger_B_fkey";

-- DropIndex
DROP INDEX "public"."TriggerHit_clauseId_triggerId_key";

-- AlterTable
ALTER TABLE "Clause" DROP COLUMN "analysisRequestId",
DROP COLUMN "categories",
DROP COLUMN "content",
DROP COLUMN "riskScore",
DROP COLUMN "severity",
DROP COLUMN "triggerWarning",
ADD COLUMN     "depth" INTEGER NOT NULL,
ADD COLUMN     "documentId" TEXT NOT NULL,
ADD COLUMN     "meta" JSONB,
ADD COLUMN     "ordinalPath" TEXT NOT NULL,
ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "clauseTypeId",
ADD COLUMN     "clauseCategoryId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."AnalysisRequest";

-- DropTable
DROP TABLE "public"."ClauseType";

-- DropTable
DROP TABLE "public"."_AnalysisRequestToTrigger";

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "locale" TEXT,
    "kind" "DocumentKind",
    "type" "TypeRequest" NOT NULL,
    "status" "AnalysisStatus" NOT NULL DEFAULT 'PENDING',
    "sourceUrl" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTrigger" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "minConfidence" DOUBLE PRECISION,
    "notes" TEXT,

    CONSTRAINT "DocumentTrigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalysisRun" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "status" "AnalysisStatus" NOT NULL DEFAULT 'RUNNING',
    "engineVersion" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3) NOT NULL,
    "overallRisk" SMALLINT NOT NULL DEFAULT 0,
    "notes" TEXT NOT NULL,

    CONSTRAINT "AnalysisRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClauseAnalysis" (
    "id" TEXT NOT NULL,
    "runId" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "severity" "Severity" NOT NULL DEFAULT 'NONE',
    "riskScore" INTEGER NOT NULL DEFAULT 0,
    "triggerWarnings" TEXT[],

    CONSTRAINT "ClauseAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryHit" (
    "id" TEXT NOT NULL,
    "clauseAnalysisId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION,

    CONSTRAINT "CategoryHit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClauseCategory" (
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

    CONSTRAINT "ClauseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DocumentTrigger_triggerId_idx" ON "DocumentTrigger"("triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentTrigger_documentId_triggerId_key" ON "DocumentTrigger"("documentId", "triggerId");

-- CreateIndex
CREATE INDEX "ClauseAnalysis_runId_idx" ON "ClauseAnalysis"("runId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryHit_clauseAnalysisId_categoryId_key" ON "CategoryHit"("clauseAnalysisId", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ClauseCategory_slug_key" ON "ClauseCategory"("slug");

-- CreateIndex
CREATE INDEX "Clause_documentId_depth_order_idx" ON "Clause"("documentId", "depth", "order");

-- CreateIndex
CREATE INDEX "Clause_documentId_ordinalPath_idx" ON "Clause"("documentId", "ordinalPath");

-- CreateIndex
CREATE INDEX "TriggerHit_clauseId_idx" ON "TriggerHit"("clauseId");

-- CreateIndex
CREATE INDEX "TriggerHit_triggerId_idx" ON "TriggerHit"("triggerId");

-- AddForeignKey
ALTER TABLE "DocumentTrigger" ADD CONSTRAINT "DocumentTrigger_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentTrigger" ADD CONSTRAINT "DocumentTrigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clause" ADD CONSTRAINT "Clause_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clause" ADD CONSTRAINT "Clause_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Clause"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisRun" ADD CONSTRAINT "AnalysisRun_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClauseAnalysis" ADD CONSTRAINT "ClauseAnalysis_runId_fkey" FOREIGN KEY ("runId") REFERENCES "AnalysisRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClauseAnalysis" ADD CONSTRAINT "ClauseAnalysis_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "Clause"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryHit" ADD CONSTRAINT "CategoryHit_clauseAnalysisId_fkey" FOREIGN KEY ("clauseAnalysisId") REFERENCES "ClauseAnalysis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryHit" ADD CONSTRAINT "CategoryHit_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ClauseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_clauseCategoryId_fkey" FOREIGN KEY ("clauseCategoryId") REFERENCES "ClauseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
