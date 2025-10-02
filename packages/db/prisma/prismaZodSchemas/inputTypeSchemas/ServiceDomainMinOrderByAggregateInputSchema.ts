import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServiceDomainMinOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceDomainMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  domainId: z.lazy(() => SortOrderSchema).optional(),
  pathPattern: z.lazy(() => SortOrderSchema).optional(),
});

export default ServiceDomainMinOrderByAggregateInputSchema;
