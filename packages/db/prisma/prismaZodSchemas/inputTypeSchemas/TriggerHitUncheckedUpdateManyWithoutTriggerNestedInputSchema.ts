import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitCreateWithoutTriggerInputSchema } from './TriggerHitCreateWithoutTriggerInputSchema';
import { TriggerHitUncheckedCreateWithoutTriggerInputSchema } from './TriggerHitUncheckedCreateWithoutTriggerInputSchema';
import { TriggerHitCreateOrConnectWithoutTriggerInputSchema } from './TriggerHitCreateOrConnectWithoutTriggerInputSchema';
import { TriggerHitUpsertWithWhereUniqueWithoutTriggerInputSchema } from './TriggerHitUpsertWithWhereUniqueWithoutTriggerInputSchema';
import { TriggerHitCreateManyTriggerInputEnvelopeSchema } from './TriggerHitCreateManyTriggerInputEnvelopeSchema';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitUpdateWithWhereUniqueWithoutTriggerInputSchema } from './TriggerHitUpdateWithWhereUniqueWithoutTriggerInputSchema';
import { TriggerHitUpdateManyWithWhereWithoutTriggerInputSchema } from './TriggerHitUpdateManyWithWhereWithoutTriggerInputSchema';
import { TriggerHitScalarWhereInputSchema } from './TriggerHitScalarWhereInputSchema';

export const TriggerHitUncheckedUpdateManyWithoutTriggerNestedInputSchema: z.ZodType<Prisma.TriggerHitUncheckedUpdateManyWithoutTriggerNestedInput> = z.object({
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutTriggerInputSchema),z.lazy(() => TriggerHitCreateWithoutTriggerInputSchema).array(),z.lazy(() => TriggerHitUncheckedCreateWithoutTriggerInputSchema),z.lazy(() => TriggerHitUncheckedCreateWithoutTriggerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerHitCreateOrConnectWithoutTriggerInputSchema),z.lazy(() => TriggerHitCreateOrConnectWithoutTriggerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TriggerHitUpsertWithWhereUniqueWithoutTriggerInputSchema),z.lazy(() => TriggerHitUpsertWithWhereUniqueWithoutTriggerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerHitCreateManyTriggerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema),z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema),z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema),z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema),z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TriggerHitUpdateWithWhereUniqueWithoutTriggerInputSchema),z.lazy(() => TriggerHitUpdateWithWhereUniqueWithoutTriggerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TriggerHitUpdateManyWithWhereWithoutTriggerInputSchema),z.lazy(() => TriggerHitUpdateManyWithWhereWithoutTriggerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TriggerHitScalarWhereInputSchema),z.lazy(() => TriggerHitScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerHitUncheckedUpdateManyWithoutTriggerNestedInput>;

export default TriggerHitUncheckedUpdateManyWithoutTriggerNestedInputSchema;
