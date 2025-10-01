import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereInputSchema } from './ClauseAnalysisWhereInputSchema';
import { ClauseAnalysisUpdateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUpdateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema';

export const ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInput> = z.object({
  where: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseAnalysisUpdateWithoutCategoryHitsInputSchema),z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInput>;

export default ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInputSchema;
