import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutParentInputSchema } from './SectionCreateWithoutParentInputSchema';
import { SectionUncheckedCreateWithoutParentInputSchema } from './SectionUncheckedCreateWithoutParentInputSchema';
import { SectionCreateOrConnectWithoutParentInputSchema } from './SectionCreateOrConnectWithoutParentInputSchema';
import { SectionUpsertWithWhereUniqueWithoutParentInputSchema } from './SectionUpsertWithWhereUniqueWithoutParentInputSchema';
import { SectionCreateManyParentInputEnvelopeSchema } from './SectionCreateManyParentInputEnvelopeSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithWhereUniqueWithoutParentInputSchema } from './SectionUpdateWithWhereUniqueWithoutParentInputSchema';
import { SectionUpdateManyWithWhereWithoutParentInputSchema } from './SectionUpdateManyWithWhereWithoutParentInputSchema';
import { SectionScalarWhereInputSchema } from './SectionScalarWhereInputSchema';

export const SectionUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.SectionUpdateManyWithoutParentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutParentInputSchema), z.lazy(() => SectionCreateWithoutParentInputSchema).array(), z.lazy(() => SectionUncheckedCreateWithoutParentInputSchema), z.lazy(() => SectionUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SectionCreateOrConnectWithoutParentInputSchema), z.lazy(() => SectionCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SectionUpsertWithWhereUniqueWithoutParentInputSchema), z.lazy(() => SectionUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SectionCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SectionUpdateWithWhereUniqueWithoutParentInputSchema), z.lazy(() => SectionUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SectionUpdateManyWithWhereWithoutParentInputSchema), z.lazy(() => SectionUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SectionScalarWhereInputSchema), z.lazy(() => SectionScalarWhereInputSchema).array() ]).optional(),
});

export default SectionUpdateManyWithoutParentNestedInputSchema;
