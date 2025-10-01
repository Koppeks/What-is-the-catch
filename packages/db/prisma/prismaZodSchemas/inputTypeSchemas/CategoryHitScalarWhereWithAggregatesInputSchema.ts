import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';

export const CategoryHitScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryHitScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryHitScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryHitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryHitScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryHitScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryHitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  clauseAnalysisId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  confidence: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.CategoryHitScalarWhereWithAggregatesInput>;

export default CategoryHitScalarWhereWithAggregatesInputSchema;
