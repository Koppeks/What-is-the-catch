import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseCreateWithoutClauseAnalysisInputSchema } from './ClauseCreateWithoutClauseAnalysisInputSchema';
import { ClauseUncheckedCreateWithoutClauseAnalysisInputSchema } from './ClauseUncheckedCreateWithoutClauseAnalysisInputSchema';

export const ClauseCreateOrConnectWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutClauseAnalysisInput> = z.strictObject({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutClauseAnalysisInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutClauseAnalysisInputSchema) ]),
});

export default ClauseCreateOrConnectWithoutClauseAnalysisInputSchema;
