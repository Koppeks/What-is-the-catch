import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema: z.ZodType<Prisma.CompanyAliasCompanyIdValueNormCompoundUniqueInput> = z.strictObject({
  companyId: z.string(),
  valueNorm: z.string(),
});

export default CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema;
