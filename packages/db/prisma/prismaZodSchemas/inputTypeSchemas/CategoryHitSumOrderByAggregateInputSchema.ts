import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryHitSumOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryHitSumOrderByAggregateInput> = z.strictObject({
  confidence: z.lazy(() => SortOrderSchema).optional(),
});

export default CategoryHitSumOrderByAggregateInputSchema;
