import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema } from './ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema';

export const CategoryHitCreateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitCreateWithoutClauseAnalysisInput> = z.object({
  id: z.string().cuid().optional(),
  confidence: z.number().optional().nullable(),
  category: z.lazy(() => ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema)
}).strict() as z.ZodType<Prisma.CategoryHitCreateWithoutClauseAnalysisInput>;

export default CategoryHitCreateWithoutClauseAnalysisInputSchema;
