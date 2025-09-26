import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasWhereUniqueInputSchema } from './CompanyAliasWhereUniqueInputSchema';
import { CompanyAliasUpdateWithoutCompanyInputSchema } from './CompanyAliasUpdateWithoutCompanyInputSchema';
import { CompanyAliasUncheckedUpdateWithoutCompanyInputSchema } from './CompanyAliasUncheckedUpdateWithoutCompanyInputSchema';

export const CompanyAliasUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyAliasUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CompanyAliasWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompanyAliasUpdateWithoutCompanyInputSchema),z.lazy(() => CompanyAliasUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict() as z.ZodType<Prisma.CompanyAliasUpdateWithWhereUniqueWithoutCompanyInput>;

export default CompanyAliasUpdateWithWhereUniqueWithoutCompanyInputSchema;
