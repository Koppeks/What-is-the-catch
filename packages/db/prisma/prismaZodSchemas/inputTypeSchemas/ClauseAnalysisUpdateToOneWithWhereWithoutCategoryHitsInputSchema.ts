import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereInputSchema } from './ClauseAnalysisWhereInputSchema';
import { ClauseAnalysisUpdateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUpdateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema';

export const ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInput> = z.strictObject({
  where: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseAnalysisUpdateWithoutCategoryHitsInputSchema), z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema) ]),
});

export default ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInputSchema;
