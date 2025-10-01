import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisUpdateWithoutClauseInputSchema } from './ClauseAnalysisUpdateWithoutClauseInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema';

export const ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInput> = z.object({
  where: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClauseAnalysisUpdateWithoutClauseInputSchema),z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInput>;

export default ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInputSchema;
