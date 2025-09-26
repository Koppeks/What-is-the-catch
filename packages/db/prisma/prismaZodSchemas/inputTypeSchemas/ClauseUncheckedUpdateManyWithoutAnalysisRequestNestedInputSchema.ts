import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutAnalysisRequestInputSchema } from './ClauseCreateWithoutAnalysisRequestInputSchema';
import { ClauseUncheckedCreateWithoutAnalysisRequestInputSchema } from './ClauseUncheckedCreateWithoutAnalysisRequestInputSchema';
import { ClauseCreateOrConnectWithoutAnalysisRequestInputSchema } from './ClauseCreateOrConnectWithoutAnalysisRequestInputSchema';
import { ClauseUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema } from './ClauseUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema';
import { ClauseCreateManyAnalysisRequestInputEnvelopeSchema } from './ClauseCreateManyAnalysisRequestInputEnvelopeSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema } from './ClauseUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema';
import { ClauseUpdateManyWithWhereWithoutAnalysisRequestInputSchema } from './ClauseUpdateManyWithWhereWithoutAnalysisRequestInputSchema';
import { ClauseScalarWhereInputSchema } from './ClauseScalarWhereInputSchema';

export const ClauseUncheckedUpdateManyWithoutAnalysisRequestNestedInputSchema: z.ZodType<Prisma.ClauseUncheckedUpdateManyWithoutAnalysisRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseCreateWithoutAnalysisRequestInputSchema).array(),z.lazy(() => ClauseUncheckedCreateWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutAnalysisRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseCreateOrConnectWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseCreateOrConnectWithoutAnalysisRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClauseUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseCreateManyAnalysisRequestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClauseUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClauseUpdateManyWithWhereWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUpdateManyWithWhereWithoutAnalysisRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClauseScalarWhereInputSchema),z.lazy(() => ClauseScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUncheckedUpdateManyWithoutAnalysisRequestNestedInput>;

export default ClauseUncheckedUpdateManyWithoutAnalysisRequestNestedInputSchema;
