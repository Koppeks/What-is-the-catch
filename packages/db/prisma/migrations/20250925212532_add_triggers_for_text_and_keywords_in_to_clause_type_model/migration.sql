/*
  Warnings:

  - Added the required column `triggerInstruction` to the `ClauseType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ClauseType" ADD COLUMN     "triggerInstruction" TEXT NOT NULL,
ADD COLUMN     "triggerKeywords" TEXT[];
