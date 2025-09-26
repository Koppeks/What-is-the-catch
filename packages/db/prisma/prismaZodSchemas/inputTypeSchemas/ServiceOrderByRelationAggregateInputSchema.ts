import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServiceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceOrderByRelationAggregateInput>;

export default ServiceOrderByRelationAggregateInputSchema;
