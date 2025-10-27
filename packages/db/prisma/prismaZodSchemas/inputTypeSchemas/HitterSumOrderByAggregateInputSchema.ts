import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HitterSumOrderByAggregateInputSchema: z.ZodType<Prisma.HitterSumOrderByAggregateInput> = z.strictObject({
  defaultScoring: z.lazy(() => SortOrderSchema).optional(),
});

export default HitterSumOrderByAggregateInputSchema;
