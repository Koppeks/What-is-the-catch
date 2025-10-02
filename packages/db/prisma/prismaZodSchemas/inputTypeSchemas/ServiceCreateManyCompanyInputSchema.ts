import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceCreateManyCompanyInputSchema: z.ZodType<Prisma.ServiceCreateManyCompanyInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default ServiceCreateManyCompanyInputSchema;
