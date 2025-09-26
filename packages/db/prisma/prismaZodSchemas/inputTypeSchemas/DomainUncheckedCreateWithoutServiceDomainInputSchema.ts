import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DomainUncheckedCreateWithoutServiceDomainInputSchema: z.ZodType<Prisma.DomainUncheckedCreateWithoutServiceDomainInput> = z.object({
  id: z.string().cuid().optional(),
  companyId: z.string(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.DomainUncheckedCreateWithoutServiceDomainInput>;

export default DomainUncheckedCreateWithoutServiceDomainInputSchema;
