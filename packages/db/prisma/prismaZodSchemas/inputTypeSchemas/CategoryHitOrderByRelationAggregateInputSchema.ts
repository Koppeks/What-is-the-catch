import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryHitOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CategoryHitOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitOrderByRelationAggregateInput>;

export default CategoryHitOrderByRelationAggregateInputSchema;
