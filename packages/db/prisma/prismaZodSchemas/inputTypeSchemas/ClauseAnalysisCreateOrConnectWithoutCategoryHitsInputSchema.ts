import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisCreateWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema';

export const ClauseAnalysisCreateOrConnectWithoutCategoryHitsInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateOrConnectWithoutCategoryHitsInput> = z.strictObject({
  where: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutCategoryHitsInputSchema), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema) ]),
});

export default ClauseAnalysisCreateOrConnectWithoutCategoryHitsInputSchema;
