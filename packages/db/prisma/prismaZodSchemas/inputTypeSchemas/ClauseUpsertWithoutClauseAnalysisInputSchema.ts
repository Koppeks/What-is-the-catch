import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseUpdateWithoutClauseAnalysisInputSchema } from './ClauseUpdateWithoutClauseAnalysisInputSchema';
import { ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema } from './ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema';
import { ClauseCreateWithoutClauseAnalysisInputSchema } from './ClauseCreateWithoutClauseAnalysisInputSchema';
import { ClauseUncheckedCreateWithoutClauseAnalysisInputSchema } from './ClauseUncheckedCreateWithoutClauseAnalysisInputSchema';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseUpsertWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.ClauseUpsertWithoutClauseAnalysisInput> = z.strictObject({
  update: z.union([ z.lazy(() => ClauseUpdateWithoutClauseAnalysisInputSchema), z.lazy(() => ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCreateWithoutClauseAnalysisInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutClauseAnalysisInputSchema) ]),
  where: z.lazy(() => ClauseWhereInputSchema).optional(),
});

export default ClauseUpsertWithoutClauseAnalysisInputSchema;
