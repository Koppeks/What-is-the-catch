import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInputSchema } from './ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInputSchema';

export const CategoryHitUpdateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitUpdateWithoutClauseAnalysisInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.lazy(() => ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInputSchema).optional(),
});

export default CategoryHitUpdateWithoutClauseAnalysisInputSchema;
