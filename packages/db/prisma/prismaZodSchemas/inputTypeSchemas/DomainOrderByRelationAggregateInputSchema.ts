import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DomainOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DomainOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DomainOrderByRelationAggregateInput>;

export default DomainOrderByRelationAggregateInputSchema;
