import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasCreateWithoutCompanyInputSchema } from './CompanyAliasCreateWithoutCompanyInputSchema';
import { CompanyAliasUncheckedCreateWithoutCompanyInputSchema } from './CompanyAliasUncheckedCreateWithoutCompanyInputSchema';
import { CompanyAliasCreateOrConnectWithoutCompanyInputSchema } from './CompanyAliasCreateOrConnectWithoutCompanyInputSchema';
import { CompanyAliasUpsertWithWhereUniqueWithoutCompanyInputSchema } from './CompanyAliasUpsertWithWhereUniqueWithoutCompanyInputSchema';
import { CompanyAliasCreateManyCompanyInputEnvelopeSchema } from './CompanyAliasCreateManyCompanyInputEnvelopeSchema';
import { CompanyAliasWhereUniqueInputSchema } from './CompanyAliasWhereUniqueInputSchema';
import { CompanyAliasUpdateWithWhereUniqueWithoutCompanyInputSchema } from './CompanyAliasUpdateWithWhereUniqueWithoutCompanyInputSchema';
import { CompanyAliasUpdateManyWithWhereWithoutCompanyInputSchema } from './CompanyAliasUpdateManyWithWhereWithoutCompanyInputSchema';
import { CompanyAliasScalarWhereInputSchema } from './CompanyAliasScalarWhereInputSchema';

export const CompanyAliasUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CompanyAliasUpdateManyWithoutCompanyNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CompanyAliasCreateWithoutCompanyInputSchema), z.lazy(() => CompanyAliasCreateWithoutCompanyInputSchema).array(), z.lazy(() => CompanyAliasUncheckedCreateWithoutCompanyInputSchema), z.lazy(() => CompanyAliasUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyAliasCreateOrConnectWithoutCompanyInputSchema), z.lazy(() => CompanyAliasCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyAliasUpsertWithWhereUniqueWithoutCompanyInputSchema), z.lazy(() => CompanyAliasUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyAliasCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyAliasWhereUniqueInputSchema), z.lazy(() => CompanyAliasWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyAliasWhereUniqueInputSchema), z.lazy(() => CompanyAliasWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyAliasWhereUniqueInputSchema), z.lazy(() => CompanyAliasWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyAliasWhereUniqueInputSchema), z.lazy(() => CompanyAliasWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyAliasUpdateWithWhereUniqueWithoutCompanyInputSchema), z.lazy(() => CompanyAliasUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyAliasUpdateManyWithWhereWithoutCompanyInputSchema), z.lazy(() => CompanyAliasUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyAliasScalarWhereInputSchema), z.lazy(() => CompanyAliasScalarWhereInputSchema).array() ]).optional(),
});

export default CompanyAliasUpdateManyWithoutCompanyNestedInputSchema;
