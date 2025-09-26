import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ClauseOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseOrderByRelationAggregateInput>;

export default ClauseOrderByRelationAggregateInputSchema;
