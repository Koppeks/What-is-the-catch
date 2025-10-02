import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutMergedIntoInputSchema } from './TriggerCreateWithoutMergedIntoInputSchema';
import { TriggerUncheckedCreateWithoutMergedIntoInputSchema } from './TriggerUncheckedCreateWithoutMergedIntoInputSchema';
import { TriggerCreateOrConnectWithoutMergedIntoInputSchema } from './TriggerCreateOrConnectWithoutMergedIntoInputSchema';
import { TriggerUpsertWithWhereUniqueWithoutMergedIntoInputSchema } from './TriggerUpsertWithWhereUniqueWithoutMergedIntoInputSchema';
import { TriggerCreateManyMergedIntoInputEnvelopeSchema } from './TriggerCreateManyMergedIntoInputEnvelopeSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithWhereUniqueWithoutMergedIntoInputSchema } from './TriggerUpdateWithWhereUniqueWithoutMergedIntoInputSchema';
import { TriggerUpdateManyWithWhereWithoutMergedIntoInputSchema } from './TriggerUpdateManyWithWhereWithoutMergedIntoInputSchema';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';

export const TriggerUncheckedUpdateManyWithoutMergedIntoNestedInputSchema: z.ZodType<Prisma.TriggerUncheckedUpdateManyWithoutMergedIntoNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TriggerCreateWithoutMergedIntoInputSchema), z.lazy(() => TriggerCreateWithoutMergedIntoInputSchema).array(), z.lazy(() => TriggerUncheckedCreateWithoutMergedIntoInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutMergedIntoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutMergedIntoInputSchema), z.lazy(() => TriggerCreateOrConnectWithoutMergedIntoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TriggerUpsertWithWhereUniqueWithoutMergedIntoInputSchema), z.lazy(() => TriggerUpsertWithWhereUniqueWithoutMergedIntoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerCreateManyMergedIntoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TriggerUpdateWithWhereUniqueWithoutMergedIntoInputSchema), z.lazy(() => TriggerUpdateWithWhereUniqueWithoutMergedIntoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TriggerUpdateManyWithWhereWithoutMergedIntoInputSchema), z.lazy(() => TriggerUpdateManyWithWhereWithoutMergedIntoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TriggerScalarWhereInputSchema), z.lazy(() => TriggerScalarWhereInputSchema).array() ]).optional(),
});

export default TriggerUncheckedUpdateManyWithoutMergedIntoNestedInputSchema;
