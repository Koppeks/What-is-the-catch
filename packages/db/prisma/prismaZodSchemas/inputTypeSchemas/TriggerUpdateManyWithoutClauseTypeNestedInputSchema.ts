import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutClauseTypeInputSchema } from './TriggerCreateWithoutClauseTypeInputSchema';
import { TriggerUncheckedCreateWithoutClauseTypeInputSchema } from './TriggerUncheckedCreateWithoutClauseTypeInputSchema';
import { TriggerCreateOrConnectWithoutClauseTypeInputSchema } from './TriggerCreateOrConnectWithoutClauseTypeInputSchema';
import { TriggerUpsertWithWhereUniqueWithoutClauseTypeInputSchema } from './TriggerUpsertWithWhereUniqueWithoutClauseTypeInputSchema';
import { TriggerCreateManyClauseTypeInputEnvelopeSchema } from './TriggerCreateManyClauseTypeInputEnvelopeSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithWhereUniqueWithoutClauseTypeInputSchema } from './TriggerUpdateWithWhereUniqueWithoutClauseTypeInputSchema';
import { TriggerUpdateManyWithWhereWithoutClauseTypeInputSchema } from './TriggerUpdateManyWithWhereWithoutClauseTypeInputSchema';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';

export const TriggerUpdateManyWithoutClauseTypeNestedInputSchema: z.ZodType<Prisma.TriggerUpdateManyWithoutClauseTypeNestedInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutClauseTypeInputSchema),z.lazy(() => TriggerCreateWithoutClauseTypeInputSchema).array(),z.lazy(() => TriggerUncheckedCreateWithoutClauseTypeInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutClauseTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutClauseTypeInputSchema),z.lazy(() => TriggerCreateOrConnectWithoutClauseTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TriggerUpsertWithWhereUniqueWithoutClauseTypeInputSchema),z.lazy(() => TriggerUpsertWithWhereUniqueWithoutClauseTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerCreateManyClauseTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TriggerUpdateWithWhereUniqueWithoutClauseTypeInputSchema),z.lazy(() => TriggerUpdateWithWhereUniqueWithoutClauseTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TriggerUpdateManyWithWhereWithoutClauseTypeInputSchema),z.lazy(() => TriggerUpdateManyWithWhereWithoutClauseTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TriggerScalarWhereInputSchema),z.lazy(() => TriggerScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerUpdateManyWithoutClauseTypeNestedInput>;

export default TriggerUpdateManyWithoutClauseTypeNestedInputSchema;
