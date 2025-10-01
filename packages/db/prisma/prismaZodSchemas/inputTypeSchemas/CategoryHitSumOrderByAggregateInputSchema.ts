import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryHitSumOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryHitSumOrderByAggregateInput> = z.object({
  confidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitSumOrderByAggregateInput>;

export default CategoryHitSumOrderByAggregateInputSchema;
