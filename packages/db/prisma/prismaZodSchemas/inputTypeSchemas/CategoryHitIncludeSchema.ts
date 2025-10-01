import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisArgsSchema } from "../outputTypeSchemas/ClauseAnalysisArgsSchema"
import { ClauseCategoryArgsSchema } from "../outputTypeSchemas/ClauseCategoryArgsSchema"

export const CategoryHitIncludeSchema: z.ZodType<Prisma.CategoryHitInclude> = z.object({
  clauseAnalysis: z.union([z.boolean(),z.lazy(() => ClauseAnalysisArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => ClauseCategoryArgsSchema)]).optional(),
}).strict()

export default CategoryHitIncludeSchema;
