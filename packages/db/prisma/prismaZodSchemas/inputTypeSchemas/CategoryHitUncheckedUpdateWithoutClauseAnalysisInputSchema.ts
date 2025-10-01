import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';

export const CategoryHitUncheckedUpdateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitUncheckedUpdateWithoutClauseAnalysisInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.CategoryHitUncheckedUpdateWithoutClauseAnalysisInput>;

export default CategoryHitUncheckedUpdateWithoutClauseAnalysisInputSchema;
