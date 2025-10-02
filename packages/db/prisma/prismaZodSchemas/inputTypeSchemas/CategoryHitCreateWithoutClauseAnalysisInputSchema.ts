import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema } from './ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema';

export const CategoryHitCreateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitCreateWithoutClauseAnalysisInput> = z.strictObject({
  id: z.cuid().optional(),
  confidence: z.number().optional().nullable(),
  category: z.lazy(() => ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema),
});

export default CategoryHitCreateWithoutClauseAnalysisInputSchema;
