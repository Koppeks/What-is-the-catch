import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseSumOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseSumOrderByAggregateInput> = z.strictObject({
  order: z.lazy(() => SortOrderSchema).optional(),
  depth: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseSumOrderByAggregateInputSchema;
