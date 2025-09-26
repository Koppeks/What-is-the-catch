import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateNestedOneWithoutServiceDomainInputSchema } from './ServiceCreateNestedOneWithoutServiceDomainInputSchema';

export const ServiceDomainCreateWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainCreateWithoutDomainInput> = z.object({
  id: z.string().cuid().optional(),
  pathPattern: z.string().optional().nullable(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutServiceDomainInputSchema)
}).strict() as z.ZodType<Prisma.ServiceDomainCreateWithoutDomainInput>;

export default ServiceDomainCreateWithoutDomainInputSchema;
