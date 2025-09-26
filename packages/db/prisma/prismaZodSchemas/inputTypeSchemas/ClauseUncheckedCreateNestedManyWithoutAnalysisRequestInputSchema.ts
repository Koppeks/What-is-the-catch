import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutAnalysisRequestInputSchema } from './ClauseCreateWithoutAnalysisRequestInputSchema';
import { ClauseUncheckedCreateWithoutAnalysisRequestInputSchema } from './ClauseUncheckedCreateWithoutAnalysisRequestInputSchema';
import { ClauseCreateOrConnectWithoutAnalysisRequestInputSchema } from './ClauseCreateOrConnectWithoutAnalysisRequestInputSchema';
import { ClauseCreateManyAnalysisRequestInputEnvelopeSchema } from './ClauseCreateManyAnalysisRequestInputEnvelopeSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';

export const ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseCreateWithoutAnalysisRequestInputSchema).array(),z.lazy(() => ClauseUncheckedCreateWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutAnalysisRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseCreateOrConnectWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseCreateOrConnectWithoutAnalysisRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseCreateManyAnalysisRequestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInput>;

export default ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema;
