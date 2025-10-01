import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisArgsSchema } from "../outputTypeSchemas/ClauseAnalysisArgsSchema"
import { ClauseCategoryArgsSchema } from "../outputTypeSchemas/ClauseCategoryArgsSchema"

export const CategoryHitSelectSchema: z.ZodType<Prisma.CategoryHitSelect> = z.object({
  id: z.boolean().optional(),
  clauseAnalysisId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  confidence: z.boolean().optional(),
  clauseAnalysis: z.union([z.boolean(),z.lazy(() => ClauseAnalysisArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => ClauseCategoryArgsSchema)]).optional(),
}).strict()

export default CategoryHitSelectSchema;
