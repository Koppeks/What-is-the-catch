import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ClauseAnalysisOrderByWithRelationInputSchema } from './ClauseAnalysisOrderByWithRelationInputSchema';
import { ClauseCategoryOrderByWithRelationInputSchema } from './ClauseCategoryOrderByWithRelationInputSchema';

export const CategoryHitOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryHitOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clauseAnalysisId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  clauseAnalysis: z.lazy(() => ClauseAnalysisOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => ClauseCategoryOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryHitOrderByWithRelationInput>;

export default CategoryHitOrderByWithRelationInputSchema;
