import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ServiceDomainCountOrderByAggregateInputSchema } from './ServiceDomainCountOrderByAggregateInputSchema';
import { ServiceDomainMaxOrderByAggregateInputSchema } from './ServiceDomainMaxOrderByAggregateInputSchema';
import { ServiceDomainMinOrderByAggregateInputSchema } from './ServiceDomainMinOrderByAggregateInputSchema';

export const ServiceDomainOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServiceDomainOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  domainId: z.lazy(() => SortOrderSchema).optional(),
  pathPattern: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ServiceDomainCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServiceDomainMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServiceDomainMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceDomainOrderByWithAggregationInput>;

export default ServiceDomainOrderByWithAggregationInputSchema;
