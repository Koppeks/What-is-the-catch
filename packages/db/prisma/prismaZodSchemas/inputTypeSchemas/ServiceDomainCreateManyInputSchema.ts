import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainCreateManyInputSchema: z.ZodType<Prisma.ServiceDomainCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  serviceId: z.string(),
  domainId: z.string(),
  pathPattern: z.string().optional().nullable(),
});

export default ServiceDomainCreateManyInputSchema;
