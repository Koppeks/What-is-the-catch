import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HitterAvgOrderByAggregateInputSchema: z.ZodType<Prisma.HitterAvgOrderByAggregateInput> = z.strictObject({
  defaultScoring: z.lazy(() => SortOrderSchema).optional(),
});

export default HitterAvgOrderByAggregateInputSchema;
