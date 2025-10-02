import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisScalarWhereInputSchema } from './ClauseAnalysisScalarWhereInputSchema';
import { ClauseAnalysisUpdateManyMutationInputSchema } from './ClauseAnalysisUpdateManyMutationInputSchema';
import { ClauseAnalysisUncheckedUpdateManyWithoutClauseInputSchema } from './ClauseAnalysisUncheckedUpdateManyWithoutClauseInputSchema';

export const ClauseAnalysisUpdateManyWithWhereWithoutClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateManyWithWhereWithoutClauseInput> = z.strictObject({
  where: z.lazy(() => ClauseAnalysisScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClauseAnalysisUpdateManyMutationInputSchema), z.lazy(() => ClauseAnalysisUncheckedUpdateManyWithoutClauseInputSchema) ]),
});

export default ClauseAnalysisUpdateManyWithWhereWithoutClauseInputSchema;
