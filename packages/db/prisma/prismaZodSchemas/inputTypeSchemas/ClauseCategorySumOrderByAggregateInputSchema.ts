import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseCategorySumOrderByAggregateInput> = z.object({
  defaultScoring: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCategorySumOrderByAggregateInput>;

export default ClauseCategorySumOrderByAggregateInputSchema;
