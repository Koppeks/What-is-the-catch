import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithoutAnalysisRequestInputSchema } from './ClauseUpdateWithoutAnalysisRequestInputSchema';
import { ClauseUncheckedUpdateWithoutAnalysisRequestInputSchema } from './ClauseUncheckedUpdateWithoutAnalysisRequestInputSchema';
import { ClauseCreateWithoutAnalysisRequestInputSchema } from './ClauseCreateWithoutAnalysisRequestInputSchema';
import { ClauseUncheckedCreateWithoutAnalysisRequestInputSchema } from './ClauseUncheckedCreateWithoutAnalysisRequestInputSchema';

export const ClauseUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.ClauseUpsertWithWhereUniqueWithoutAnalysisRequestInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClauseUpdateWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutAnalysisRequestInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCreateWithoutAnalysisRequestInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutAnalysisRequestInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpsertWithWhereUniqueWithoutAnalysisRequestInput>;

export default ClauseUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema;
