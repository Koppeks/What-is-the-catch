import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasWhereUniqueInputSchema } from './CompanyAliasWhereUniqueInputSchema';
import { CompanyAliasUpdateWithoutCompanyInputSchema } from './CompanyAliasUpdateWithoutCompanyInputSchema';
import { CompanyAliasUncheckedUpdateWithoutCompanyInputSchema } from './CompanyAliasUncheckedUpdateWithoutCompanyInputSchema';
import { CompanyAliasCreateWithoutCompanyInputSchema } from './CompanyAliasCreateWithoutCompanyInputSchema';
import { CompanyAliasUncheckedCreateWithoutCompanyInputSchema } from './CompanyAliasUncheckedCreateWithoutCompanyInputSchema';

export const CompanyAliasUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyAliasUpsertWithWhereUniqueWithoutCompanyInput> = z.strictObject({
  where: z.lazy(() => CompanyAliasWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompanyAliasUpdateWithoutCompanyInputSchema), z.lazy(() => CompanyAliasUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyAliasCreateWithoutCompanyInputSchema), z.lazy(() => CompanyAliasUncheckedCreateWithoutCompanyInputSchema) ]),
});

export default CompanyAliasUpsertWithWhereUniqueWithoutCompanyInputSchema;
