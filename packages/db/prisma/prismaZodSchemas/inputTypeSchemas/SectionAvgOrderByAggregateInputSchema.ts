import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SectionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SectionAvgOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default SectionAvgOrderByAggregateInputSchema;
