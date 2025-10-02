import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUncheckedCreateWithoutCategoryInput> = z.strictObject({
  id: z.cuid().optional(),
  clauseAnalysisId: z.string(),
  confidence: z.number().optional().nullable(),
});

export default CategoryHitUncheckedCreateWithoutCategoryInputSchema;
