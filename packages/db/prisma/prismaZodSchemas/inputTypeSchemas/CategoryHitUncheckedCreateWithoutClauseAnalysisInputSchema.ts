import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitUncheckedCreateWithoutClauseAnalysisInput> = z.strictObject({
  id: z.cuid().optional(),
  categoryId: z.string(),
  confidence: z.number().optional().nullable(),
});

export default CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema;
