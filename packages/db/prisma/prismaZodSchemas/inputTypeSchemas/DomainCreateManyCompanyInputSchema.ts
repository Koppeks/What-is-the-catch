import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DomainCreateManyCompanyInputSchema: z.ZodType<Prisma.DomainCreateManyCompanyInput> = z.strictObject({
  id: z.cuid().optional(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default DomainCreateManyCompanyInputSchema;
