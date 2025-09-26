import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';
import { CompanyCreateWithoutCompanyAliasInputSchema } from './CompanyCreateWithoutCompanyAliasInputSchema';
import { CompanyUncheckedCreateWithoutCompanyAliasInputSchema } from './CompanyUncheckedCreateWithoutCompanyAliasInputSchema';

export const CompanyCreateOrConnectWithoutCompanyAliasInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutCompanyAliasInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCompanyAliasInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCompanyAliasInputSchema) ]),
}).strict() as z.ZodType<Prisma.CompanyCreateOrConnectWithoutCompanyAliasInput>;

export default CompanyCreateOrConnectWithoutCompanyAliasInputSchema;
