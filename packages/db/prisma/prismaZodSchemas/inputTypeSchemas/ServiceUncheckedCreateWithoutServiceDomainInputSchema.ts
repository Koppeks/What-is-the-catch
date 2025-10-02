import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceUncheckedCreateWithoutServiceDomainInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutServiceDomainInput> = z.strictObject({
  id: z.cuid().optional(),
  companyId: z.string(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default ServiceUncheckedCreateWithoutServiceDomainInputSchema;
