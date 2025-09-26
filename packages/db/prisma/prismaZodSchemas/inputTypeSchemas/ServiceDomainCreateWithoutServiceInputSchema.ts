import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateNestedOneWithoutServiceDomainInputSchema } from './DomainCreateNestedOneWithoutServiceDomainInputSchema';

export const ServiceDomainCreateWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainCreateWithoutServiceInput> = z.object({
  id: z.string().cuid().optional(),
  pathPattern: z.string().optional().nullable(),
  domain: z.lazy(() => DomainCreateNestedOneWithoutServiceDomainInputSchema)
}).strict() as z.ZodType<Prisma.ServiceDomainCreateWithoutServiceInput>;

export default ServiceDomainCreateWithoutServiceInputSchema;
