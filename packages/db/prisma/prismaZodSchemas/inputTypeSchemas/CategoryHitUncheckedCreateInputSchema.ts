import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryHitUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  clauseAnalysisId: z.string(),
  categoryId: z.string(),
  confidence: z.number().optional().nullable(),
});

export default CategoryHitUncheckedCreateInputSchema;
