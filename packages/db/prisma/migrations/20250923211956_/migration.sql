-- AlterTable
ALTER TABLE "public"."_AnalysisRequestToTrigger" ADD CONSTRAINT "_AnalysisRequestToTrigger_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "public"."_AnalysisRequestToTrigger_AB_unique";
