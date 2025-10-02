import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryHitAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryHitAvgOrderByAggregateInput> = z.strictObject({
  confidence: z.lazy(() => SortOrderSchema).optional(),
});

export default CategoryHitAvgOrderByAggregateInputSchema;
