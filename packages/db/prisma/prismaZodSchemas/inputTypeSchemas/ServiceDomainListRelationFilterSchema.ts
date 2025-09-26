import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainWhereInputSchema } from './ServiceDomainWhereInputSchema';

export const ServiceDomainListRelationFilterSchema: z.ZodType<Prisma.ServiceDomainListRelationFilter> = z.object({
  every: z.lazy(() => ServiceDomainWhereInputSchema).optional(),
  some: z.lazy(() => ServiceDomainWhereInputSchema).optional(),
  none: z.lazy(() => ServiceDomainWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceDomainListRelationFilter>;

export default ServiceDomainListRelationFilterSchema;
