import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainUncheckedCreateWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainUncheckedCreateWithoutDomainInput> = z.object({
  id: z.string().cuid().optional(),
  serviceId: z.string(),
  pathPattern: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.ServiceDomainUncheckedCreateWithoutDomainInput>;

export default ServiceDomainUncheckedCreateWithoutDomainInputSchema;
