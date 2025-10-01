import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema';

export const CategoryHitCreateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitCreateWithoutCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  confidence: z.number().optional().nullable(),
  clauseAnalysis: z.lazy(() => ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema)
}).strict() as z.ZodType<Prisma.CategoryHitCreateWithoutCategoryInput>;

export default CategoryHitCreateWithoutCategoryInputSchema;
