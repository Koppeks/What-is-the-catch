import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ClauseCategoryCountOrderByAggregateInputSchema } from './ClauseCategoryCountOrderByAggregateInputSchema';
import { ClauseCategoryAvgOrderByAggregateInputSchema } from './ClauseCategoryAvgOrderByAggregateInputSchema';
import { ClauseCategoryMaxOrderByAggregateInputSchema } from './ClauseCategoryMaxOrderByAggregateInputSchema';
import { ClauseCategoryMinOrderByAggregateInputSchema } from './ClauseCategoryMinOrderByAggregateInputSchema';
import { ClauseCategorySumOrderByAggregateInputSchema } from './ClauseCategorySumOrderByAggregateInputSchema';

export const ClauseCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClauseCategoryOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  defaultScoring: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  triggerInstruction: z.lazy(() => SortOrderSchema).optional(),
  triggerKeywords: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClauseCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ClauseCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClauseCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClauseCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ClauseCategorySumOrderByAggregateInputSchema).optional(),
});

export default ClauseCategoryOrderByWithAggregationInputSchema;
