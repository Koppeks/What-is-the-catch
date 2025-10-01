import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryHitAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryHitAvgOrderByAggregateInput> = z.object({
  confidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitAvgOrderByAggregateInput>;

export default CategoryHitAvgOrderByAggregateInputSchema;
