import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitCreateManyCategoryInputSchema: z.ZodType<Prisma.CategoryHitCreateManyCategoryInput> = z.strictObject({
  id: z.cuid().optional(),
  clauseAnalysisId: z.string(),
  confidence: z.number().optional().nullable(),
});

export default CategoryHitCreateManyCategoryInputSchema;
