import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseTypeAvgOrderByAggregateInput> = z.object({
  defaultScoring: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseTypeAvgOrderByAggregateInput>;

export default ClauseTypeAvgOrderByAggregateInputSchema;
