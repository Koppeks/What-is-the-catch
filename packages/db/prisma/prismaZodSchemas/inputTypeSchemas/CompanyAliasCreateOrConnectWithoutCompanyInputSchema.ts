import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasWhereUniqueInputSchema } from './CompanyAliasWhereUniqueInputSchema';
import { CompanyAliasCreateWithoutCompanyInputSchema } from './CompanyAliasCreateWithoutCompanyInputSchema';
import { CompanyAliasUncheckedCreateWithoutCompanyInputSchema } from './CompanyAliasUncheckedCreateWithoutCompanyInputSchema';

export const CompanyAliasCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyAliasCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => CompanyAliasWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyAliasCreateWithoutCompanyInputSchema),z.lazy(() => CompanyAliasUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict() as z.ZodType<Prisma.CompanyAliasCreateOrConnectWithoutCompanyInput>;

export default CompanyAliasCreateOrConnectWithoutCompanyInputSchema;
