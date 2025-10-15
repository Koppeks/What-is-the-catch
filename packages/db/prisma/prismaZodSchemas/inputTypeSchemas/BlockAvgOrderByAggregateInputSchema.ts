import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BlockAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BlockAvgOrderByAggregateInput> = z.strictObject({
  order: z.lazy(() => SortOrderSchema).optional(),
  depth: z.lazy(() => SortOrderSchema).optional(),
});

export default BlockAvgOrderByAggregateInputSchema;
