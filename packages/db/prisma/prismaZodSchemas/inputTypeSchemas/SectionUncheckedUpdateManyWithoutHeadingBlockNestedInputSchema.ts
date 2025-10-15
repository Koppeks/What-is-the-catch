import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutHeadingBlockInputSchema } from './SectionCreateWithoutHeadingBlockInputSchema';
import { SectionUncheckedCreateWithoutHeadingBlockInputSchema } from './SectionUncheckedCreateWithoutHeadingBlockInputSchema';
import { SectionCreateOrConnectWithoutHeadingBlockInputSchema } from './SectionCreateOrConnectWithoutHeadingBlockInputSchema';
import { SectionUpsertWithWhereUniqueWithoutHeadingBlockInputSchema } from './SectionUpsertWithWhereUniqueWithoutHeadingBlockInputSchema';
import { SectionCreateManyHeadingBlockInputEnvelopeSchema } from './SectionCreateManyHeadingBlockInputEnvelopeSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithWhereUniqueWithoutHeadingBlockInputSchema } from './SectionUpdateWithWhereUniqueWithoutHeadingBlockInputSchema';
import { SectionUpdateManyWithWhereWithoutHeadingBlockInputSchema } from './SectionUpdateManyWithWhereWithoutHeadingBlockInputSchema';
import { SectionScalarWhereInputSchema } from './SectionScalarWhereInputSchema';

export const SectionUncheckedUpdateManyWithoutHeadingBlockNestedInputSchema: z.ZodType<Prisma.SectionUncheckedUpdateManyWithoutHeadingBlockNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutHeadingBlockInputSchema), z.lazy(() => SectionCreateWithoutHeadingBlockInputSchema).array(), z.lazy(() => SectionUncheckedCreateWithoutHeadingBlockInputSchema), z.lazy(() => SectionUncheckedCreateWithoutHeadingBlockInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SectionCreateOrConnectWithoutHeadingBlockInputSchema), z.lazy(() => SectionCreateOrConnectWithoutHeadingBlockInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SectionUpsertWithWhereUniqueWithoutHeadingBlockInputSchema), z.lazy(() => SectionUpsertWithWhereUniqueWithoutHeadingBlockInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SectionCreateManyHeadingBlockInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SectionUpdateWithWhereUniqueWithoutHeadingBlockInputSchema), z.lazy(() => SectionUpdateWithWhereUniqueWithoutHeadingBlockInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SectionUpdateManyWithWhereWithoutHeadingBlockInputSchema), z.lazy(() => SectionUpdateManyWithWhereWithoutHeadingBlockInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SectionScalarWhereInputSchema), z.lazy(() => SectionScalarWhereInputSchema).array() ]).optional(),
});

export default SectionUncheckedUpdateManyWithoutHeadingBlockNestedInputSchema;
