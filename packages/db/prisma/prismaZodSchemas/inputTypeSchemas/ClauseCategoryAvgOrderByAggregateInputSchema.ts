import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseCategoryAvgOrderByAggregateInput> = z.strictObject({
  defaultScoring: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseCategoryAvgOrderByAggregateInputSchema;
