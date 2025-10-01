import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisUpdateWithoutClauseInputSchema } from './ClauseAnalysisUpdateWithoutClauseInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema';
import { ClauseAnalysisCreateWithoutClauseInputSchema } from './ClauseAnalysisCreateWithoutClauseInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutClauseInputSchema } from './ClauseAnalysisUncheckedCreateWithoutClauseInputSchema';

export const ClauseAnalysisUpsertWithWhereUniqueWithoutClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisUpsertWithWhereUniqueWithoutClauseInput> = z.object({
  where: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClauseAnalysisUpdateWithoutClauseInputSchema),z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutClauseInputSchema),z.lazy(() => ClauseAnalysisUncheckedCreateWithoutClauseInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUpsertWithWhereUniqueWithoutClauseInput>;

export default ClauseAnalysisUpsertWithWhereUniqueWithoutClauseInputSchema;
