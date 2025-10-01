import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisCreateOrConnectWithoutCategoryHitsInputSchema } from './ClauseAnalysisCreateOrConnectWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUpsertWithoutCategoryHitsInputSchema } from './ClauseAnalysisUpsertWithoutCategoryHitsInputSchema';
import { ClauseAnalysisWhereUniqueInputSchema } from './ClauseAnalysisWhereUniqueInputSchema';
import { ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInputSchema } from './ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUpdateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUpdateWithoutCategoryHitsInputSchema';
import { ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema } from './ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema';

export const ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClauseAnalysisCreateWithoutCategoryHitsInputSchema),z.lazy(() => ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseAnalysisCreateOrConnectWithoutCategoryHitsInputSchema).optional(),
  upsert: z.lazy(() => ClauseAnalysisUpsertWithoutCategoryHitsInputSchema).optional(),
  connect: z.lazy(() => ClauseAnalysisWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseAnalysisUpdateToOneWithWhereWithoutCategoryHitsInputSchema),z.lazy(() => ClauseAnalysisUpdateWithoutCategoryHitsInputSchema),z.lazy(() => ClauseAnalysisUncheckedUpdateWithoutCategoryHitsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInput>;

export default ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema;
