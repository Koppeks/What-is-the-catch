import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitCreateWithoutClauseInputSchema } from './TriggerHitCreateWithoutClauseInputSchema';
import { TriggerHitUncheckedCreateWithoutClauseInputSchema } from './TriggerHitUncheckedCreateWithoutClauseInputSchema';
import { TriggerHitCreateOrConnectWithoutClauseInputSchema } from './TriggerHitCreateOrConnectWithoutClauseInputSchema';
import { TriggerHitUpsertWithWhereUniqueWithoutClauseInputSchema } from './TriggerHitUpsertWithWhereUniqueWithoutClauseInputSchema';
import { TriggerHitCreateManyClauseInputEnvelopeSchema } from './TriggerHitCreateManyClauseInputEnvelopeSchema';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitUpdateWithWhereUniqueWithoutClauseInputSchema } from './TriggerHitUpdateWithWhereUniqueWithoutClauseInputSchema';
import { TriggerHitUpdateManyWithWhereWithoutClauseInputSchema } from './TriggerHitUpdateManyWithWhereWithoutClauseInputSchema';
import { TriggerHitScalarWhereInputSchema } from './TriggerHitScalarWhereInputSchema';

export const TriggerHitUncheckedUpdateManyWithoutClauseNestedInputSchema: z.ZodType<Prisma.TriggerHitUncheckedUpdateManyWithoutClauseNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutClauseInputSchema), z.lazy(() => TriggerHitCreateWithoutClauseInputSchema).array(), z.lazy(() => TriggerHitUncheckedCreateWithoutClauseInputSchema), z.lazy(() => TriggerHitUncheckedCreateWithoutClauseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerHitCreateOrConnectWithoutClauseInputSchema), z.lazy(() => TriggerHitCreateOrConnectWithoutClauseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TriggerHitUpsertWithWhereUniqueWithoutClauseInputSchema), z.lazy(() => TriggerHitUpsertWithWhereUniqueWithoutClauseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerHitCreateManyClauseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema), z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema), z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema), z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema), z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TriggerHitUpdateWithWhereUniqueWithoutClauseInputSchema), z.lazy(() => TriggerHitUpdateWithWhereUniqueWithoutClauseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TriggerHitUpdateManyWithWhereWithoutClauseInputSchema), z.lazy(() => TriggerHitUpdateManyWithWhereWithoutClauseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TriggerHitScalarWhereInputSchema), z.lazy(() => TriggerHitScalarWhereInputSchema).array() ]).optional(),
});

export default TriggerHitUncheckedUpdateManyWithoutClauseNestedInputSchema;
