import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateNestedOneWithoutServiceDomainInputSchema } from './ServiceCreateNestedOneWithoutServiceDomainInputSchema';
import { DomainCreateNestedOneWithoutServiceDomainInputSchema } from './DomainCreateNestedOneWithoutServiceDomainInputSchema';

export const ServiceDomainCreateInputSchema: z.ZodType<Prisma.ServiceDomainCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pathPattern: z.string().optional().nullable(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutServiceDomainInputSchema),
  domain: z.lazy(() => DomainCreateNestedOneWithoutServiceDomainInputSchema)
}).strict() as z.ZodType<Prisma.ServiceDomainCreateInput>;

export default ServiceDomainCreateInputSchema;
