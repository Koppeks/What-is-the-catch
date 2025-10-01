import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryHitCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryHitCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clauseAnalysisId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitCountOrderByAggregateInput>;

export default CategoryHitCountOrderByAggregateInputSchema;
