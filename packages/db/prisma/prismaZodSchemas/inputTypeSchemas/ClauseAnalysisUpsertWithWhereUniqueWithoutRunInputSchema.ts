import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisUpdateWithoutRunInputSchema } from './ClauseAnalysisUpdateWithoutRunInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutRunInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutRunInputSchema';
import { ClauseAnalysisCreateWithoutRunInputSchema } from './ClauseAnalysisCreateWithoutRunInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutRunInputSchema } from './ClauseAnalysisUncheckedCreateWithoutRunInputSchema';

export const ClauseAnalysisUpsertWithWhereUniqueWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisUpsertWithWhereUniqueWithoutRunInput> = z.object({
  where: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClauseAnalysisUpdateWithoutRunInputSchema),z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutRunInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutRunInputSchema),z.lazy(() => ClauseAnalysisUncheckedCreateWithoutRunInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUpsertWithWhereUniqueWithoutRunInput>;

export default ClauseAnalysisUpsertWithWhereUniqueWithoutRunInputSchema;
