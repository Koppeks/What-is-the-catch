import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServiceDomainOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServiceDomainOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ServiceDomainOrderByRelationAggregateInputSchema;
