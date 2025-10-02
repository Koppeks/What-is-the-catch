import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateWithoutRunInputSchema } from './ClauseAnalysisCreateWithoutRunInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutRunInputSchema } from './ClauseAnalysisUncheckedCreateWithoutRunInputSchema';
import { ClauseAnalysisCreateOrConnectWithoutRunInputSchema } from './ClauseAnalysisCreateOrConnectWithoutRunInputSchema';
import { ClauseAnalysisCreateManyRunInputEnvelopeSchema } from './ClauseAnalysisCreateManyRunInputEnvelopeSchema';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';

export const ClauseAnalysisCreateNestedManyWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateNestedManyWithoutRunInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutRunInputSchema), z.lazy(() => ClauseAnalysisCreateWithoutRunInputSchema).array(), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutRunInputSchema), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutRunInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseAnalysisCreateOrConnectWithoutRunInputSchema), z.lazy(() => ClauseAnalysisCreateOrConnectWithoutRunInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseAnalysisCreateManyRunInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClauseAnalysisWhereUniqueInputSchema), z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).array() ]).optional(),
});

export default ClauseAnalysisCreateNestedManyWithoutRunInputSchema;
