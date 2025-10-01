import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseCategoryAvgOrderByAggregateInput> = z.object({
  defaultScoring: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCategoryAvgOrderByAggregateInput>;

export default ClauseCategoryAvgOrderByAggregateInputSchema;
