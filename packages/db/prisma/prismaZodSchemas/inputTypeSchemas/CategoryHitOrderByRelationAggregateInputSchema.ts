import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryHitOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CategoryHitOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default CategoryHitOrderByRelationAggregateInputSchema;
