import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainUncheckedCreateWithoutServiceInput> = z.object({
  id: z.string().cuid().optional(),
  domainId: z.string(),
  pathPattern: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.ServiceDomainUncheckedCreateWithoutServiceInput>;

export default ServiceDomainUncheckedCreateWithoutServiceInputSchema;
