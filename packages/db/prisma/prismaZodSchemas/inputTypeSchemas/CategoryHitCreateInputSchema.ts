import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema';
import { ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema } from './ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema';

export const CategoryHitCreateInputSchema: z.ZodType<Prisma.CategoryHitCreateInput> = z.object({
  id: z.string().cuid().optional(),
  confidence: z.number().optional().nullable(),
  clauseAnalysis: z.lazy(() => ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema),
  category: z.lazy(() => ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema)
}).strict() as z.ZodType<Prisma.CategoryHitCreateInput>;

export default CategoryHitCreateInputSchema;
