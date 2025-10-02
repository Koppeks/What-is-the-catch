import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DomainCreateManyInputSchema: z.ZodType<Prisma.DomainCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  companyId: z.string(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default DomainCreateManyInputSchema;
