import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryHitUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  clauseAnalysisId: z.string(),
  categoryId: z.string(),
  confidence: z.number().optional().nullable()
}).strict() as z.ZodType<Prisma.CategoryHitUncheckedCreateInput>;

export default CategoryHitUncheckedCreateInputSchema;
