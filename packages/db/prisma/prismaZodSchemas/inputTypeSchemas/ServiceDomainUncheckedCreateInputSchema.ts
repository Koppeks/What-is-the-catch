import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainUncheckedCreateInputSchema: z.ZodType<Prisma.ServiceDomainUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  serviceId: z.string(),
  domainId: z.string(),
  pathPattern: z.string().optional().nullable(),
});

export default ServiceDomainUncheckedCreateInputSchema;
