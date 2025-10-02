import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema';

export const CategoryHitCreateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitCreateWithoutCategoryInput> = z.strictObject({
  id: z.cuid().optional(),
  confidence: z.number().optional().nullable(),
  clauseAnalysis: z.lazy(() => ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema),
});

export default CategoryHitCreateWithoutCategoryInputSchema;
