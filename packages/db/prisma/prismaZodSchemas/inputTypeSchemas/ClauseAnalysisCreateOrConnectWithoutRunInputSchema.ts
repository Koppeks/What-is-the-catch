import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisCreateWithoutRunInputSchema } from './ClauseAnalysisCreateWithoutRunInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutRunInputSchema } from './ClauseAnalysisUncheckedCreateWithoutRunInputSchema';

export const ClauseAnalysisCreateOrConnectWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateOrConnectWithoutRunInput> = z.object({
  where: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutRunInputSchema),z.lazy(() => ClauseAnalysisUncheckedCreateWithoutRunInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreateOrConnectWithoutRunInput>;

export default ClauseAnalysisCreateOrConnectWithoutRunInputSchema;
