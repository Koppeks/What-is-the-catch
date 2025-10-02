import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseAvgOrderByAggregateInput> = z.strictObject({
  order: z.lazy(() => SortOrderSchema).optional(),
  depth: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseAvgOrderByAggregateInputSchema;
