import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitCreateManyClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitCreateManyClauseAnalysisInput> = z.object({
  id: z.string().cuid().optional(),
  categoryId: z.string(),
  confidence: z.number().optional().nullable()
}).strict() as z.ZodType<Prisma.CategoryHitCreateManyClauseAnalysisInput>;

export default CategoryHitCreateManyClauseAnalysisInputSchema;
