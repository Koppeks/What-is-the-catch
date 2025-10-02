import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceCreateManyInputSchema: z.ZodType<Prisma.ServiceCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  companyId: z.string(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default ServiceCreateManyInputSchema;
