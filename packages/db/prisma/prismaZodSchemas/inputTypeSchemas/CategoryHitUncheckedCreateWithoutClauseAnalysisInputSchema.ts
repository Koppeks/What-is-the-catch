import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitUncheckedCreateWithoutClauseAnalysisInput> = z.object({
  id: z.string().cuid().optional(),
  categoryId: z.string(),
  confidence: z.number().optional().nullable()
}).strict() as z.ZodType<Prisma.CategoryHitUncheckedCreateWithoutClauseAnalysisInput>;

export default CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema;
