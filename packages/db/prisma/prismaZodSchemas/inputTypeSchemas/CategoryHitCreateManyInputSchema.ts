import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitCreateManyInputSchema: z.ZodType<Prisma.CategoryHitCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  clauseAnalysisId: z.string(),
  categoryId: z.string(),
  confidence: z.number().optional().nullable()
}).strict() as z.ZodType<Prisma.CategoryHitCreateManyInput>;

export default CategoryHitCreateManyInputSchema;
