import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DomainCreateManyCompanyInputSchema: z.ZodType<Prisma.DomainCreateManyCompanyInput> = z.object({
  id: z.string().cuid().optional(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.DomainCreateManyCompanyInput>;

export default DomainCreateManyCompanyInputSchema;
