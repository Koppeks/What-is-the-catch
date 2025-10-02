import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisCreateOrConnectWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateOrConnectWithoutCategoryHitsInputSchema';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';

export const ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateNestedOneWithoutCategoryHitsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutCategoryHitsInputSchema), z.lazy(() => ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseAnalysisCreateOrConnectWithoutCategoryHitsInputSchema).optional(),
  connect: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).optional(),
});

export default ClauseAnalysisCreateNestedOneWithoutCategoryHitsInputSchema;
