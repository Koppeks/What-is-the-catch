import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitCreateManyClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitCreateManyClauseAnalysisInput> = z.strictObject({
  id: z.cuid().optional(),
  categoryId: z.string(),
  confidence: z.number().optional().nullable(),
});

export default CategoryHitCreateManyClauseAnalysisInputSchema;
