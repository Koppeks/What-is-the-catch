import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceCreateManyCompanyInputSchema: z.ZodType<Prisma.ServiceCreateManyCompanyInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.ServiceCreateManyCompanyInput>;

export default ServiceCreateManyCompanyInputSchema;
