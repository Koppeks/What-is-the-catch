import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithoutAnalysisRequestInputSchema } from './ClauseUpdateWithoutAnalysisRequestInputSchema';
import { ClauseUncheckedUpdateWithoutAnalysisRequestInputSchema } from './ClauseUncheckedUpdateWithoutAnalysisRequestInputSchema';

export const ClauseUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.ClauseUpdateWithWhereUniqueWithoutAnalysisRequestInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClauseUpdateWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutAnalysisRequestInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateWithWhereUniqueWithoutAnalysisRequestInput>;

export default ClauseUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema;
