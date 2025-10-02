import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema } from './ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema';

export const CategoryHitUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUpdateWithoutCategoryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clauseAnalysis: z.lazy(() => ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema).optional(),
});

export default CategoryHitUpdateWithoutCategoryInputSchema;
