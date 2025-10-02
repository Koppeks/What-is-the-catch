import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutClauseAnalysisInputSchema } from './ClauseCreateWithoutClauseAnalysisInputSchema';
import { ClauseUncheckedCreateWithoutClauseAnalysisInputSchema } from './ClauseUncheckedCreateWithoutClauseAnalysisInputSchema';
import { ClauseCreateOrConnectWithoutClauseAnalysisInputSchema } from './ClauseCreateOrConnectWithoutClauseAnalysisInputSchema';
import { ClauseUpsertWithoutClauseAnalysisInputSchema } from './ClauseUpsertWithoutClauseAnalysisInputSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateToOneWithWhereWithoutClauseAnalysisInputSchema } from './ClauseUpdateToOneWithWhereWithoutClauseAnalysisInputSchema';
import { ClauseUpdateWithoutClauseAnalysisInputSchema } from './ClauseUpdateWithoutClauseAnalysisInputSchema';
import { ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema } from './ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema';

export const ClauseUpdateOneRequiredWithoutClauseAnalysisNestedInputSchema: z.ZodType<Prisma.ClauseUpdateOneRequiredWithoutClauseAnalysisNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseCreateWithoutClauseAnalysisInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutClauseAnalysisInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutClauseAnalysisInputSchema).optional(),
  upsert: z.lazy(() => ClauseUpsertWithoutClauseAnalysisInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseUpdateToOneWithWhereWithoutClauseAnalysisInputSchema), z.lazy(() => ClauseUpdateWithoutClauseAnalysisInputSchema), z.lazy(() => ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema) ]).optional(),
});

export default ClauseUpdateOneRequiredWithoutClauseAnalysisNestedInputSchema;
