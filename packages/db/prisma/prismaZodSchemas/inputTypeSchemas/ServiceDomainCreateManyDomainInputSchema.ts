import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainCreateManyDomainInputSchema: z.ZodType<Prisma.ServiceDomainCreateManyDomainInput> = z.object({
  id: z.string().cuid().optional(),
  serviceId: z.string(),
  pathPattern: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.ServiceDomainCreateManyDomainInput>;

export default ServiceDomainCreateManyDomainInputSchema;
