import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutClauseAnalysisInputSchema } from './ClauseCreateWithoutClauseAnalysisInputSchema';
import { ClauseUncheckedCreateWithoutClauseAnalysisInputSchema } from './ClauseUncheckedCreateWithoutClauseAnalysisInputSchema';
import { ClauseCreateOrConnectWithoutClauseAnalysisInputSchema } from './ClauseCreateOrConnectWithoutClauseAnalysisInputSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';

export const ClauseCreateNestedOneWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.ClauseCreateNestedOneWithoutClauseAnalysisInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutClauseAnalysisInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutClauseAnalysisInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutClauseAnalysisInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCreateNestedOneWithoutClauseAnalysisInput>;

export default ClauseCreateNestedOneWithoutClauseAnalysisInputSchema;
