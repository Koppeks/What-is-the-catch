import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainUncheckedCreateWithoutServiceInput> = z.strictObject({
  id: z.cuid().optional(),
  domainId: z.string(),
  pathPattern: z.string().optional().nullable(),
});

export default ServiceDomainUncheckedCreateWithoutServiceInputSchema;
