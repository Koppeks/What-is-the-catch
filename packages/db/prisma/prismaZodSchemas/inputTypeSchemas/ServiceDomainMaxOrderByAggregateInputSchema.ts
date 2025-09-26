import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServiceDomainMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceDomainMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  domainId: z.lazy(() => SortOrderSchema).optional(),
  pathPattern: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceDomainMaxOrderByAggregateInput>;

export default ServiceDomainMaxOrderByAggregateInputSchema;
