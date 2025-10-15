import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BlockSumOrderByAggregateInputSchema: z.ZodType<Prisma.BlockSumOrderByAggregateInput> = z.strictObject({
  order: z.lazy(() => SortOrderSchema).optional(),
  depth: z.lazy(() => SortOrderSchema).optional(),
});

export default BlockSumOrderByAggregateInputSchema;
