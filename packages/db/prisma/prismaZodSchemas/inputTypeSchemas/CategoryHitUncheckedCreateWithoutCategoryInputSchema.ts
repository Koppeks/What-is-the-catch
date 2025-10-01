import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  clauseAnalysisId: z.string(),
  confidence: z.number().optional().nullable()
}).strict() as z.ZodType<Prisma.CategoryHitUncheckedCreateWithoutCategoryInput>;

export default CategoryHitUncheckedCreateWithoutCategoryInputSchema;
