import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainCreateManyServiceInputSchema: z.ZodType<Prisma.ServiceDomainCreateManyServiceInput> = z.object({
  id: z.string().cuid().optional(),
  domainId: z.string(),
  pathPattern: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.ServiceDomainCreateManyServiceInput>;

export default ServiceDomainCreateManyServiceInputSchema;
