import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ClauseOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseOrderByRelationAggregateInputSchema;
