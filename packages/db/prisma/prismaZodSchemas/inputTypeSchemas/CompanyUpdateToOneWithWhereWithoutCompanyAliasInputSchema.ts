import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { CompanyUpdateWithoutCompanyAliasInputSchema } from './CompanyUpdateWithoutCompanyAliasInputSchema';
import { CompanyUncheckedUpdateWithoutCompanyAliasInputSchema } from './CompanyUncheckedUpdateWithoutCompanyAliasInputSchema';

export const CompanyUpdateToOneWithWhereWithoutCompanyAliasInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutCompanyAliasInput> = z.strictObject({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutCompanyAliasInputSchema), z.lazy(() => CompanyUncheckedUpdateWithoutCompanyAliasInputSchema) ]),
});

export default CompanyUpdateToOneWithWhereWithoutCompanyAliasInputSchema;
