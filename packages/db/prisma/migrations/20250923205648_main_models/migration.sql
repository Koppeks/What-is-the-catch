/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('FREE', 'PRO');

-- CreateEnum
CREATE TYPE "TypeRequest" AS ENUM ('PASTE_TEXT', 'UPLOAD', 'URL_SCRAPE', 'API', 'EMBEDED');

-- CreateEnum
CREATE TYPE "AnalysisStatus" AS ENUM ('PENDING', 'RUNNING', 'DONE', 'FAILED');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('NONE', 'LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "TriggerSource" AS ENUM ('SYSTEM', 'AI');

-- CreateEnum
CREATE TYPE "TriggerState" AS ENUM ('PROPOSED', 'ACTIVE', 'MERGED', 'DEPRECATED');

-- CreateEnum
CREATE TYPE "AvailableRoles" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "subscriptionStatus" "AccountStatus" NOT NULL DEFAULT 'FREE',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userRole" "AvailableRoles" NOT NULL DEFAULT 'USER',
ADD COLUMN     "username" VARCHAR(64) NOT NULL;

-- CreateTable
CREATE TABLE "AnalysisRequest" (
    "id" TEXT NOT NULL,
    "type" "TypeRequest" NOT NULL,
    "status" "AnalysisStatus" NOT NULL DEFAULT 'PENDING',
    "sourceUrl" TEXT,
    "language" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalysisRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clause" (
    "id" TEXT NOT NULL,
    "analysisRequestId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "triggerWarning" TEXT[],
    "severity" "Severity" NOT NULL,
    "riskScore" INTEGER NOT NULL,
    "categories" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clause_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "patterns" TEXT[],
    "source" "TriggerSource" NOT NULL DEFAULT 'SYSTEM',
    "state" "TriggerState" NOT NULL DEFAULT 'ACTIVE',
    "mergedIntoId" TEXT,
    "reviewNotes" TEXT,
    "promotedAt" TIMESTAMP(3),
    "category" TEXT,
    "defaultSeverity" "Severity",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriggerHit" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION,
    "matches" JSONB,

    CONSTRAINT "TriggerHit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AnalysisRequestToTrigger" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_key_key" ON "Trigger"("key");

-- CreateIndex
CREATE INDEX "Trigger_state_source_idx" ON "Trigger"("state", "source");

-- CreateIndex
CREATE INDEX "Trigger_mergedIntoId_idx" ON "Trigger"("mergedIntoId");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_active_key_when_active" ON "Trigger"("key", "state");

-- CreateIndex
CREATE UNIQUE INDEX "TriggerHit_clauseId_triggerId_key" ON "TriggerHit"("clauseId", "triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "_AnalysisRequestToTrigger_AB_unique" ON "_AnalysisRequestToTrigger"("A", "B");

-- CreateIndex
CREATE INDEX "_AnalysisRequestToTrigger_B_index" ON "_AnalysisRequestToTrigger"("B");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "Clause" ADD CONSTRAINT "Clause_analysisRequestId_fkey" FOREIGN KEY ("analysisRequestId") REFERENCES "AnalysisRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_mergedIntoId_fkey" FOREIGN KEY ("mergedIntoId") REFERENCES "Trigger"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerHit" ADD CONSTRAINT "TriggerHit_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "Clause"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerHit" ADD CONSTRAINT "TriggerHit_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnalysisRequestToTrigger" ADD CONSTRAINT "_AnalysisRequestToTrigger_A_fkey" FOREIGN KEY ("A") REFERENCES "AnalysisRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnalysisRequestToTrigger" ADD CONSTRAINT "_AnalysisRequestToTrigger_B_fkey" FOREIGN KEY ("B") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;
