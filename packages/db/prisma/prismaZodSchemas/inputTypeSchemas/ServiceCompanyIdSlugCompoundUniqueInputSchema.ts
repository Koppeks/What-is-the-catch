import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceCompanyIdSlugCompoundUniqueInputSchema: z.ZodType<Prisma.ServiceCompanyIdSlugCompoundUniqueInput> = z.object({
  companyId: z.string(),
  slug: z.string()
}).strict() as z.ZodType<Prisma.ServiceCompanyIdSlugCompoundUniqueInput>;

export default ServiceCompanyIdSlugCompoundUniqueInputSchema;
