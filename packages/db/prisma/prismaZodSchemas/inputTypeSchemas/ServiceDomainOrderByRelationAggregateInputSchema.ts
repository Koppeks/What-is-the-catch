import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServiceDomainOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServiceDomainOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceDomainOrderByRelationAggregateInput>;

export default ServiceDomainOrderByRelationAggregateInputSchema;
