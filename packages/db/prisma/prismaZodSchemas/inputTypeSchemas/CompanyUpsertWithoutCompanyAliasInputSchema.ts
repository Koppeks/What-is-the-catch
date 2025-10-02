import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyUpdateWithoutCompanyAliasInputSchema } from './CompanyUpdateWithoutCompanyAliasInputSchema';
import { CompanyUncheckedUpdateWithoutCompanyAliasInputSchema } from './CompanyUncheckedUpdateWithoutCompanyAliasInputSchema';
import { CompanyCreateWithoutCompanyAliasInputSchema } from './CompanyCreateWithoutCompanyAliasInputSchema';
import { CompanyUncheckedCreateWithoutCompanyAliasInputSchema } from './CompanyUncheckedCreateWithoutCompanyAliasInputSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyUpsertWithoutCompanyAliasInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutCompanyAliasInput> = z.strictObject({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutCompanyAliasInputSchema), z.lazy(() => CompanyUncheckedUpdateWithoutCompanyAliasInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCompanyAliasInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutCompanyAliasInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
});

export default CompanyUpsertWithoutCompanyAliasInputSchema;
