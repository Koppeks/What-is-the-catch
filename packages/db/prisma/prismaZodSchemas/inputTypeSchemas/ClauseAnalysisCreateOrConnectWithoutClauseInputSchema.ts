import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisCreateWithoutClauseInputSchema } from './ClauseAnalysisCreateWithoutClauseInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutClauseInputSchema } from './ClauseAnalysisUncheckedCreateWithoutClauseInputSchema';

export const ClauseAnalysisCreateOrConnectWithoutClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateOrConnectWithoutClauseInput> = z.object({
  where: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutClauseInputSchema),z.lazy(() => ClauseAnalysisUncheckedCreateWithoutClauseInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreateOrConnectWithoutClauseInput>;

export default ClauseAnalysisCreateOrConnectWithoutClauseInputSchema;
