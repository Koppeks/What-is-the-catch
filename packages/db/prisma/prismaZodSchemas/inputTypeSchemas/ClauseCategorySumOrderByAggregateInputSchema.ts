import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseCategorySumOrderByAggregateInput> = z.strictObject({
  defaultScoring: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseCategorySumOrderByAggregateInputSchema;
