import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BlockOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BlockOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default BlockOrderByRelationAggregateInputSchema;
