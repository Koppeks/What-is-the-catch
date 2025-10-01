import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisUpdateWithoutRunInputSchema } from './ClauseAnalysisUpdateWithoutRunInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutRunInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutRunInputSchema';

export const ClauseAnalysisUpdateWithWhereUniqueWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateWithWhereUniqueWithoutRunInput> = z.object({
  where: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClauseAnalysisUpdateWithoutRunInputSchema),z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutRunInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUpdateWithWhereUniqueWithoutRunInput>;

export default ClauseAnalysisUpdateWithWhereUniqueWithoutRunInputSchema;
