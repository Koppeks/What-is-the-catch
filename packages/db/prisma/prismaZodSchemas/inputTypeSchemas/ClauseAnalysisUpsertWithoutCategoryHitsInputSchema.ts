import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisUpdateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUpdateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisCreateWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisWhereInputSchema } from './ClauseAnalysisWhereInputSchema';

export const ClauseAnalysisUpsertWithoutCategoryHitsInputSchema: z.ZodType<Prisma.ClauseAnalysisUpsertWithoutCategoryHitsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ClauseAnalysisUpdateWithoutCategoryHitsInputSchema), z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutCategoryHitsInputSchema), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema) ]),
  where: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
});

export default ClauseAnalysisUpsertWithoutCategoryHitsInputSchema;
