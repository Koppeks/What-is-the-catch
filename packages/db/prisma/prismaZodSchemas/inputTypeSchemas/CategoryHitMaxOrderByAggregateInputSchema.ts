import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryHitMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryHitMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clauseAnalysisId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitMaxOrderByAggregateInput>;

export default CategoryHitMaxOrderByAggregateInputSchema;
