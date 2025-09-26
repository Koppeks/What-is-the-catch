import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainCreateManyInputSchema: z.ZodType<Prisma.ServiceDomainCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  serviceId: z.string(),
  domainId: z.string(),
  pathPattern: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.ServiceDomainCreateManyInput>;

export default ServiceDomainCreateManyInputSchema;
