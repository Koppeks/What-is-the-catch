import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasScalarWhereInputSchema } from './CompanyAliasScalarWhereInputSchema';
import { CompanyAliasUpdateManyMutationInputSchema } from './CompanyAliasUpdateManyMutationInputSchema';
import { CompanyAliasUncheckedUpdateManyWithoutCompanyInputSchema } from './CompanyAliasUncheckedUpdateManyWithoutCompanyInputSchema';

export const CompanyAliasUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyAliasUpdateManyWithWhereWithoutCompanyInput> = z.strictObject({
  where: z.lazy(() => CompanyAliasScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompanyAliasUpdateManyMutationInputSchema), z.lazy(() => CompanyAliasUncheckedUpdateManyWithoutCompanyInputSchema) ]),
});

export default CompanyAliasUpdateManyWithWhereWithoutCompanyInputSchema;
