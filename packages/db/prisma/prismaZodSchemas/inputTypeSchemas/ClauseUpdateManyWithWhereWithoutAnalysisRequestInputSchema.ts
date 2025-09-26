import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseScalarWhereInputSchema } from './ClauseScalarWhereInputSchema';
import { ClauseUpdateManyMutationInputSchema } from './ClauseUpdateManyMutationInputSchema';
import { ClauseUncheckedUpdateManyWithoutAnalysisRequestInputSchema } from './ClauseUncheckedUpdateManyWithoutAnalysisRequestInputSchema';

export const ClauseUpdateManyWithWhereWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.ClauseUpdateManyWithWhereWithoutAnalysisRequestInput> = z.object({
  where: z.lazy(() => ClauseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClauseUpdateManyMutationInputSchema),z.lazy(() => ClauseUncheckedUpdateManyWithoutAnalysisRequestInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateManyWithWhereWithoutAnalysisRequestInput>;

export default ClauseUpdateManyWithWhereWithoutAnalysisRequestInputSchema;
