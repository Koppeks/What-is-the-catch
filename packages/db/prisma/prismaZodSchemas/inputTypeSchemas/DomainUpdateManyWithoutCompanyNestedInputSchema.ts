import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateWithoutCompanyInputSchema } from './DomainCreateWithoutCompanyInputSchema';
import { DomainUncheckedCreateWithoutCompanyInputSchema } from './DomainUncheckedCreateWithoutCompanyInputSchema';
import { DomainCreateOrConnectWithoutCompanyInputSchema } from './DomainCreateOrConnectWithoutCompanyInputSchema';
import { DomainUpsertWithWhereUniqueWithoutCompanyInputSchema } from './DomainUpsertWithWhereUniqueWithoutCompanyInputSchema';
import { DomainCreateManyCompanyInputEnvelopeSchema } from './DomainCreateManyCompanyInputEnvelopeSchema';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainUpdateWithWhereUniqueWithoutCompanyInputSchema } from './DomainUpdateWithWhereUniqueWithoutCompanyInputSchema';
import { DomainUpdateManyWithWhereWithoutCompanyInputSchema } from './DomainUpdateManyWithWhereWithoutCompanyInputSchema';
import { DomainScalarWhereInputSchema } from './DomainScalarWhereInputSchema';

export const DomainUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.DomainUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => DomainCreateWithoutCompanyInputSchema),z.lazy(() => DomainCreateWithoutCompanyInputSchema).array(),z.lazy(() => DomainUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => DomainUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DomainCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => DomainCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DomainUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => DomainUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DomainCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DomainWhereUniqueInputSchema),z.lazy(() => DomainWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DomainWhereUniqueInputSchema),z.lazy(() => DomainWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DomainWhereUniqueInputSchema),z.lazy(() => DomainWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DomainWhereUniqueInputSchema),z.lazy(() => DomainWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DomainUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => DomainUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DomainUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => DomainUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DomainScalarWhereInputSchema),z.lazy(() => DomainScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.DomainUpdateManyWithoutCompanyNestedInput>;

export default DomainUpdateManyWithoutCompanyNestedInputSchema;
