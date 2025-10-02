import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ServiceCompanyIdSlugCompoundUniqueInputSchema: z.ZodType<Prisma.ServiceCompanyIdSlugCompoundUniqueInput> = z.strictObject({
  companyId: z.string(),
  slug: z.string(),
});

export default ServiceCompanyIdSlugCompoundUniqueInputSchema;
