import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisScalarWhereInputSchema } from './ClauseAnalysisScalarWhereInputSchema';
import { ClauseAnalysisUpdateManyMutationInputSchema } from './ClauseAnalysisUpdateManyMutationInputSchema';
import { ClauseAnalysisUncheckedUpdateManyWithoutRunInputSchema } from './ClauseAnalysisUncheckedUpdateManyWithoutRunInputSchema';

export const ClauseAnalysisUpdateManyWithWhereWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateManyWithWhereWithoutRunInput> = z.object({
  where: z.lazy(() => ClauseAnalysisScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClauseAnalysisUpdateManyMutationInputSchema),z.lazy(() => ClauseAnalysisUncheckedUpdateManyWithoutRunInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUpdateManyWithWhereWithoutRunInput>;

export default ClauseAnalysisUpdateManyWithWhereWithoutRunInputSchema;
