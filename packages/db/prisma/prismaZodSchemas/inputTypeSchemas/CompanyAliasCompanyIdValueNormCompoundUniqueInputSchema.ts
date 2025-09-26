import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema: z.ZodType<Prisma.CompanyAliasCompanyIdValueNormCompoundUniqueInput> = z.object({
  companyId: z.string(),
  valueNorm: z.string()
}).strict() as z.ZodType<Prisma.CompanyAliasCompanyIdValueNormCompoundUniqueInput>;

export default CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema;
