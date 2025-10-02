import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainCreateManyDomainInputSchema: z.ZodType<Prisma.ServiceDomainCreateManyDomainInput> = z.strictObject({
  id: z.cuid().optional(),
  serviceId: z.string(),
  pathPattern: z.string().optional().nullable(),
});

export default ServiceDomainCreateManyDomainInputSchema;
