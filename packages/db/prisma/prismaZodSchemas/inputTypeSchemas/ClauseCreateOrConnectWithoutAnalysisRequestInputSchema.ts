import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseCreateWithoutAnalysisRequestInputSchema } from './ClauseCreateWithoutAnalysisRequestInputSchema';
import { ClauseUncheckedCreateWithoutAnalysisRequestInputSchema } from './ClauseUncheckedCreateWithoutAnalysisRequestInputSchema';

export const ClauseCreateOrConnectWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutAnalysisRequestInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutAnalysisRequestInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseCreateOrConnectWithoutAnalysisRequestInput>;

export default ClauseCreateOrConnectWithoutAnalysisRequestInputSchema;
