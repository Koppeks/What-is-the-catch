import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';
import { ClauseUpdateWithoutClauseAnalysisInputSchema } from './ClauseUpdateWithoutClauseAnalysisInputSchema';
import { ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema } from './ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema';

export const ClauseUpdateToOneWithWhereWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.ClauseUpdateToOneWithWhereWithoutClauseAnalysisInput> = z.object({
  where: z.lazy(() => ClauseWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseUpdateWithoutClauseAnalysisInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateToOneWithWhereWithoutClauseAnalysisInput>;

export default ClauseUpdateToOneWithWhereWithoutClauseAnalysisInputSchema;
