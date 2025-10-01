import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema } from './ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema';

export const CategoryHitUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clauseAnalysis: z.lazy(() => ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitUpdateWithoutCategoryInput>;

export default CategoryHitUpdateWithoutCategoryInputSchema;
