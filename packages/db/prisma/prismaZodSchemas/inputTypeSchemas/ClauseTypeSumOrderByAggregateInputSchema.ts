import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseTypeSumOrderByAggregateInput> = z.object({
  defaultScoring: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseTypeSumOrderByAggregateInput>;

export default ClauseTypeSumOrderByAggregateInputSchema;
