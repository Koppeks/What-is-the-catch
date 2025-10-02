import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DomainOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DomainOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default DomainOrderByRelationAggregateInputSchema;
