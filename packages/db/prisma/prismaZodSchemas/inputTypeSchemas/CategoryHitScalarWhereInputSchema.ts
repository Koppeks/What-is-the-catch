import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';

export const CategoryHitScalarWhereInputSchema: z.ZodType<Prisma.CategoryHitScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryHitScalarWhereInputSchema),z.lazy(() => CategoryHitScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryHitScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryHitScalarWhereInputSchema),z.lazy(() => CategoryHitScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  clauseAnalysisId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  confidence: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.CategoryHitScalarWhereInput>;

export default CategoryHitScalarWhereInputSchema;
