import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseAvgOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional(),
  depth: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAvgOrderByAggregateInput>;

export default ClauseAvgOrderByAggregateInputSchema;
