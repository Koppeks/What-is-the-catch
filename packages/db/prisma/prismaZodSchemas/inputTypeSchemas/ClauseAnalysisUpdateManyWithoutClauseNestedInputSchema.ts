import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateWithoutClauseInputSchema } from './ClauseAnalysisCreateWithoutClauseInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutClauseInputSchema } from './ClauseAnalysisUncheckedCreateWithoutClauseInputSchema';
import { ClauseAnalysisCreateOrConnectWithoutClauseInputSchema } from './ClauseAnalysisCreateOrConnectWithoutClauseInputSchema';
import { ClauseAnalysisUpsertWithWhereUniqueWithoutClauseInputSchema } from './ClauseAnalysisUpsertWithWhereUniqueWithoutClauseInputSchema';
import { ClauseAnalysisCreateManyClauseInputEnvelopeSchema } from './ClauseAnalysisCreateManyClauseInputEnvelopeSchema';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInputSchema } from './ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInputSchema';
import { ClauseAnalysisUpdateManyWithWhereWithoutClauseInputSchema } from './ClauseAnalysisUpdateManyWithWhereWithoutClauseInputSchema';
import { ClauseAnalysisScalarWhereInputSchema } from './ClauseAnalysisScalarWhereInputSchema';

export const ClauseAnalysisUpdateManyWithoutClauseNestedInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateManyWithoutClauseNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutClauseInputSchema), z.lazy(() => ClauseAnalysisCreateWithoutClauseInputSchema).array(), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutClauseInputSchema), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutClauseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseAnalysisCreateOrConnectWithoutClauseInputSchema), z.lazy(() => ClauseAnalysisCreateOrConnectWithoutClauseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClauseAnalysisUpsertWithWhereUniqueWithoutClauseInputSchema), z.lazy(() => ClauseAnalysisUpsertWithWhereUniqueWithoutClauseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseAnalysisCreateManyClauseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInputSchema), z.lazy(() => ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClauseAnalysisUpdateManyWithWhereWithoutClauseInputSchema), z.lazy(() => ClauseAnalysisUpdateManyWithWhereWithoutClauseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClauseAnalysisScalarWhereInputSchema), z.lazy(() => ClauseAnalysisScalarWhereInputSchema).array() ]).optional(),
});

export default ClauseAnalysisUpdateManyWithoutClauseNestedInputSchema;
