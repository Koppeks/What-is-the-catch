import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompanyCreateManyInputSchema: z.ZodType<Prisma.CompanyCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().optional().nullable(),
  countryCode: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.CompanyCreateManyInput>;

export default CompanyCreateManyInputSchema;
