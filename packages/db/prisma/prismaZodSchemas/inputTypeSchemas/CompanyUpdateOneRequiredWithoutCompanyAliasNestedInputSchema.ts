import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateWithoutCompanyAliasInputSchema } from './CompanyCreateWithoutCompanyAliasInputSchema';
import { CompanyUncheckedCreateWithoutCompanyAliasInputSchema } from './CompanyUncheckedCreateWithoutCompanyAliasInputSchema';
import { CompanyCreateOrConnectWithoutCompanyAliasInputSchema } from './CompanyCreateOrConnectWithoutCompanyAliasInputSchema';
import { CompanyUpsertWithoutCompanyAliasInputSchema } from './CompanyUpsertWithoutCompanyAliasInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';
import { CompanyUpdateToOneWithWhereWithoutCompanyAliasInputSchema } from './CompanyUpdateToOneWithWhereWithoutCompanyAliasInputSchema';
import { CompanyUpdateWithoutCompanyAliasInputSchema } from './CompanyUpdateWithoutCompanyAliasInputSchema';
import { CompanyUncheckedUpdateWithoutCompanyAliasInputSchema } from './CompanyUncheckedUpdateWithoutCompanyAliasInputSchema';

export const CompanyUpdateOneRequiredWithoutCompanyAliasNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutCompanyAliasNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCompanyAliasInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutCompanyAliasInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCompanyAliasInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutCompanyAliasInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutCompanyAliasInputSchema), z.lazy(() => CompanyUpdateWithoutCompanyAliasInputSchema), z.lazy(() => CompanyUncheckedUpdateWithoutCompanyAliasInputSchema) ]).optional(),
});

export default CompanyUpdateOneRequiredWithoutCompanyAliasNestedInputSchema;
