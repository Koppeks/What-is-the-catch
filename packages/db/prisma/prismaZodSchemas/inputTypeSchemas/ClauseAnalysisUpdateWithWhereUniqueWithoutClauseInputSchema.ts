import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisUpdateWithoutClauseInputSchema } from './ClauseAnalysisUpdateWithoutClauseInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema';

export const ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInput> = z.strictObject({
  where: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClauseAnalysisUpdateWithoutClauseInputSchema), z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutClauseInputSchema) ]),
});

export default ClauseAnalysisUpdateWithWhereUniqueWithoutClauseInputSchema;
