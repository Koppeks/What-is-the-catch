import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasCreateWithoutCompanyInputSchema } from './CompanyAliasCreateWithoutCompanyInputSchema';
import { CompanyAliasUncheckedCreateWithoutCompanyInputSchema } from './CompanyAliasUncheckedCreateWithoutCompanyInputSchema';
import { CompanyAliasCreateOrConnectWithoutCompanyInputSchema } from './CompanyAliasCreateOrConnectWithoutCompanyInputSchema';
import { CompanyAliasCreateManyCompanyInputEnvelopeSchema } from './CompanyAliasCreateManyCompanyInputEnvelopeSchema';
import { CompanyAliasWhereUniqueInputSchema } from './CompanyAliasWhereUniqueInputSchema';

export const CompanyAliasCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyAliasCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CompanyAliasCreateWithoutCompanyInputSchema),z.lazy(() => CompanyAliasCreateWithoutCompanyInputSchema).array(),z.lazy(() => CompanyAliasUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CompanyAliasUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyAliasCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CompanyAliasCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyAliasCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyAliasWhereUniqueInputSchema),z.lazy(() => CompanyAliasWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.CompanyAliasCreateNestedManyWithoutCompanyInput>;

export default CompanyAliasCreateNestedManyWithoutCompanyInputSchema;
