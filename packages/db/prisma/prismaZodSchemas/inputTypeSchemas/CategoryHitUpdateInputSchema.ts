import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema } from './ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema';
import { ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInputSchema } from './ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInputSchema';

export const CategoryHitUpdateInputSchema: z.ZodType<Prisma.CategoryHitUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clauseAnalysis: z.lazy(() => ClauseAnalysisUpdateOneRequiredWithoutCategoryHitsNestedInputSchema).optional(),
  category: z.lazy(() => ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitUpdateInput>;

export default CategoryHitUpdateInputSchema;
