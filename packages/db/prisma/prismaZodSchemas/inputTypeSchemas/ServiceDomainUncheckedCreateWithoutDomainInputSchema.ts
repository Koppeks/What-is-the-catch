import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainUncheckedCreateWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainUncheckedCreateWithoutDomainInput> = z.strictObject({
  id: z.cuid().optional(),
  serviceId: z.string(),
  pathPattern: z.string().optional().nullable(),
});

export default ServiceDomainUncheckedCreateWithoutDomainInputSchema;
