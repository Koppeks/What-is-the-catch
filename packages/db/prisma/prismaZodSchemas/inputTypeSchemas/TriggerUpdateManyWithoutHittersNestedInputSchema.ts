import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutHittersInputSchema } from './TriggerCreateWithoutHittersInputSchema';
import { TriggerUncheckedCreateWithoutHittersInputSchema } from './TriggerUncheckedCreateWithoutHittersInputSchema';
import { TriggerCreateOrConnectWithoutHittersInputSchema } from './TriggerCreateOrConnectWithoutHittersInputSchema';
import { TriggerUpsertWithWhereUniqueWithoutHittersInputSchema } from './TriggerUpsertWithWhereUniqueWithoutHittersInputSchema';
import { TriggerCreateManyHittersInputEnvelopeSchema } from './TriggerCreateManyHittersInputEnvelopeSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithWhereUniqueWithoutHittersInputSchema } from './TriggerUpdateWithWhereUniqueWithoutHittersInputSchema';
import { TriggerUpdateManyWithWhereWithoutHittersInputSchema } from './TriggerUpdateManyWithWhereWithoutHittersInputSchema';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';

export const TriggerUpdateManyWithoutHittersNestedInputSchema: z.ZodType<Prisma.TriggerUpdateManyWithoutHittersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TriggerCreateWithoutHittersInputSchema), z.lazy(() => TriggerCreateWithoutHittersInputSchema).array(), z.lazy(() => TriggerUncheckedCreateWithoutHittersInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutHittersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutHittersInputSchema), z.lazy(() => TriggerCreateOrConnectWithoutHittersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TriggerUpsertWithWhereUniqueWithoutHittersInputSchema), z.lazy(() => TriggerUpsertWithWhereUniqueWithoutHittersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerCreateManyHittersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema), z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TriggerUpdateWithWhereUniqueWithoutHittersInputSchema), z.lazy(() => TriggerUpdateWithWhereUniqueWithoutHittersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TriggerUpdateManyWithWhereWithoutHittersInputSchema), z.lazy(() => TriggerUpdateManyWithWhereWithoutHittersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TriggerScalarWhereInputSchema), z.lazy(() => TriggerScalarWhereInputSchema).array() ]).optional(),
});

export default TriggerUpdateManyWithoutHittersNestedInputSchema;
