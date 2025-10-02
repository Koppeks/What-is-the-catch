import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitCreateManyInputSchema: z.ZodType<Prisma.CategoryHitCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  clauseAnalysisId: z.string(),
  categoryId: z.string(),
  confidence: z.number().optional().nullable(),
});

export default CategoryHitCreateManyInputSchema;
