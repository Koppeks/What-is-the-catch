import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CategoryHitCountOrderByAggregateInputSchema } from './CategoryHitCountOrderByAggregateInputSchema';
import { CategoryHitAvgOrderByAggregateInputSchema } from './CategoryHitAvgOrderByAggregateInputSchema';
import { CategoryHitMaxOrderByAggregateInputSchema } from './CategoryHitMaxOrderByAggregateInputSchema';
import { CategoryHitMinOrderByAggregateInputSchema } from './CategoryHitMinOrderByAggregateInputSchema';
import { CategoryHitSumOrderByAggregateInputSchema } from './CategoryHitSumOrderByAggregateInputSchema';

export const CategoryHitOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryHitOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clauseAnalysisId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CategoryHitCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CategoryHitAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryHitMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryHitMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CategoryHitSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitOrderByWithAggregationInput>;

export default CategoryHitOrderByWithAggregationInputSchema;
