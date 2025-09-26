import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateWithoutCompanyAliasInputSchema } from './CompanyCreateWithoutCompanyAliasInputSchema';
import { CompanyUncheckedCreateWithoutCompanyAliasInputSchema } from './CompanyUncheckedCreateWithoutCompanyAliasInputSchema';
import { CompanyCreateOrConnectWithoutCompanyAliasInputSchema } from './CompanyCreateOrConnectWithoutCompanyAliasInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyCreateNestedOneWithoutCompanyAliasInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutCompanyAliasInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCompanyAliasInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCompanyAliasInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCompanyAliasInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyCreateNestedOneWithoutCompanyAliasInput>;

export default CompanyCreateNestedOneWithoutCompanyAliasInputSchema;
