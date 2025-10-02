import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ServiceOrderByWithRelationInputSchema } from './ServiceOrderByWithRelationInputSchema';
import { DomainOrderByWithRelationInputSchema } from './DomainOrderByWithRelationInputSchema';

export const ServiceDomainOrderByWithRelationInputSchema: z.ZodType<Prisma.ServiceDomainOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  domainId: z.lazy(() => SortOrderSchema).optional(),
  pathPattern: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  service: z.lazy(() => ServiceOrderByWithRelationInputSchema).optional(),
  domain: z.lazy(() => DomainOrderByWithRelationInputSchema).optional(),
});

export default ServiceDomainOrderByWithRelationInputSchema;
