import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutParentInputSchema } from './ClauseCreateWithoutParentInputSchema';
import { ClauseUncheckedCreateWithoutParentInputSchema } from './ClauseUncheckedCreateWithoutParentInputSchema';
import { ClauseCreateOrConnectWithoutParentInputSchema } from './ClauseCreateOrConnectWithoutParentInputSchema';
import { ClauseUpsertWithWhereUniqueWithoutParentInputSchema } from './ClauseUpsertWithWhereUniqueWithoutParentInputSchema';
import { ClauseCreateManyParentInputEnvelopeSchema } from './ClauseCreateManyParentInputEnvelopeSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithWhereUniqueWithoutParentInputSchema } from './ClauseUpdateWithWhereUniqueWithoutParentInputSchema';
import { ClauseUpdateManyWithWhereWithoutParentInputSchema } from './ClauseUpdateManyWithWhereWithoutParentInputSchema';
import { ClauseScalarWhereInputSchema } from './ClauseScalarWhereInputSchema';

export const ClauseUncheckedUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.ClauseUncheckedUpdateManyWithoutParentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutParentInputSchema),z.lazy(() => ClauseCreateWithoutParentInputSchema).array(),z.lazy(() => ClauseUncheckedCreateWithoutParentInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseCreateOrConnectWithoutParentInputSchema),z.lazy(() => ClauseCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClauseUpsertWithWhereUniqueWithoutParentInputSchema),z.lazy(() => ClauseUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClauseUpdateWithWhereUniqueWithoutParentInputSchema),z.lazy(() => ClauseUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClauseUpdateManyWithWhereWithoutParentInputSchema),z.lazy(() => ClauseUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClauseScalarWhereInputSchema),z.lazy(() => ClauseScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUncheckedUpdateManyWithoutParentNestedInput>;

export default ClauseUncheckedUpdateManyWithoutParentNestedInputSchema;
