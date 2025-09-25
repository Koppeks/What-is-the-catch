/*
  Warnings:

  - You are about to drop the column `category` on the `Trigger` table. All the data in the column will be lost.
  - Added the required column `clauseTypeId` to the `Trigger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Trigger" DROP COLUMN "category",
ADD COLUMN     "clauseTypeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."ClauseType" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "version" TEXT NOT NULL DEFAULT '0.0.1',
    "defaultScoring" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "label" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClauseType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClauseType_slug_key" ON "public"."ClauseType"("slug");

-- AddForeignKey
ALTER TABLE "public"."Trigger" ADD CONSTRAINT "Trigger_clauseTypeId_fkey" FOREIGN KEY ("clauseTypeId") REFERENCES "public"."ClauseType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
