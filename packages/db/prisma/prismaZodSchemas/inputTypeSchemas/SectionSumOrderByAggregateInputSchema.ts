import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SectionSumOrderByAggregateInputSchema: z.ZodType<Prisma.SectionSumOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default SectionSumOrderByAggregateInputSchema;
