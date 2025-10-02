import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateWithoutRunInputSchema } from './ClauseAnalysisCreateWithoutRunInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutRunInputSchema } from './ClauseAnalysisUncheckedCreateWithoutRunInputSchema';
import { ClauseAnalysisCreateOrConnectWithoutRunInputSchema } from './ClauseAnalysisCreateOrConnectWithoutRunInputSchema';
import { ClauseAnalysisUpsertWithWhereUniqueWithoutRunInputSchema } from './ClauseAnalysisUpsertWithWhereUniqueWithoutRunInputSchema';
import { ClauseAnalysisCreateManyRunInputEnvelopeSchema } from './ClauseAnalysisCreateManyRunInputEnvelopeSchema';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisUpdateWithWhereUniqueWithoutRunInputSchema } from './ClauseAnalysisUpdateWithWhereUniqueWithoutRunInputSchema';
import { ClauseAnalysisUpdateManyWithWhereWithoutRunInputSchema } from './ClauseAnalysisUpdateManyWithWhereWithoutRunInputSchema';
import { ClauseAnalysisScalarWhereInputSchema } from './ClauseAnalysisScalarWhereInputSchema';

export const ClauseAnalysisUncheckedUpdateManyWithoutRunNestedInputSchema: z.ZodType<Prisma.ClauseAnalysisUncheckedUpdateManyWithoutRunNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutRunInputSchema), z.lazy(() => ClauseAnalysisCreateWithoutRunInputSchema).array(), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutRunInputSchema), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutRunInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseAnalysisCreateOrConnectWithoutRunInputSchema), z.lazy(() => ClauseAnalysisCreateOrConnectWithoutRunInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClauseAnalysisUpsertWithWhereUniqueWithoutRunInputSchema), z.lazy(() => ClauseAnalysisUpsertWithWhereUniqueWithoutRunInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseAnalysisCreateManyRunInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClauseAnalysisUpdateWithWhereUniqueWithoutRunInputSchema), z.lazy(() => ClauseAnalysisUpdateWithWhereUniqueWithoutRunInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClauseAnalysisUpdateManyWithWhereWithoutRunInputSchema), z.lazy(() => ClauseAnalysisUpdateManyWithWhereWithoutRunInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClauseAnalysisScalarWhereInputSchema), z.lazy(() => ClauseAnalysisScalarWhereInputSchema).array() ]).optional(),
});

export default ClauseAnalysisUncheckedUpdateManyWithoutRunNestedInputSchema;
