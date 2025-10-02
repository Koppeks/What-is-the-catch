import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { ClauseAnalysisFindManyArgsSchema } from "../outputTypeSchemas/ClauseAnalysisFindManyArgsSchema"
import { AnalysisRunCountOutputTypeArgsSchema } from "../outputTypeSchemas/AnalysisRunCountOutputTypeArgsSchema"

export const AnalysisRunIncludeSchema: z.ZodType<Prisma.AnalysisRunInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  clauseAnalyses: z.union([z.boolean(),z.lazy(() => ClauseAnalysisFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AnalysisRunCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default AnalysisRunIncludeSchema;
