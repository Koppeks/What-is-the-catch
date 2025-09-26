import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DomainCreateManyInputSchema: z.ZodType<Prisma.DomainCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  companyId: z.string(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.DomainCreateManyInput>;

export default DomainCreateManyInputSchema;
