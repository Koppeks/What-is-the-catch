import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryHitCreateManyCategoryInputSchema: z.ZodType<Prisma.CategoryHitCreateManyCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  clauseAnalysisId: z.string(),
  confidence: z.number().optional().nullable()
}).strict() as z.ZodType<Prisma.CategoryHitCreateManyCategoryInput>;

export default CategoryHitCreateManyCategoryInputSchema;
