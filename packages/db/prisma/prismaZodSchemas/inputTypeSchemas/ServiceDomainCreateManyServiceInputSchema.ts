import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceDomainCreateManyServiceInputSchema: z.ZodType<Prisma.ServiceDomainCreateManyServiceInput> = z.strictObject({
  id: z.cuid().optional(),
  domainId: z.string(),
  pathPattern: z.string().optional().nullable(),
});

export default ServiceDomainCreateManyServiceInputSchema;
