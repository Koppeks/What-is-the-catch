import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SectionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SectionOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default SectionOrderByRelationAggregateInputSchema;
