import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ClauseTypeCountOrderByAggregateInputSchema } from './ClauseTypeCountOrderByAggregateInputSchema';
import { ClauseTypeAvgOrderByAggregateInputSchema } from './ClauseTypeAvgOrderByAggregateInputSchema';
import { ClauseTypeMaxOrderByAggregateInputSchema } from './ClauseTypeMaxOrderByAggregateInputSchema';
import { ClauseTypeMinOrderByAggregateInputSchema } from './ClauseTypeMinOrderByAggregateInputSchema';
import { ClauseTypeSumOrderByAggregateInputSchema } from './ClauseTypeSumOrderByAggregateInputSchema';

export const ClauseTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClauseTypeOrderByWithAggregationInput> = z.object({
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
  _count: z.lazy(() => ClauseTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ClauseTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClauseTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClauseTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ClauseTypeSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseTypeOrderByWithAggregationInput>;

export default ClauseTypeOrderByWithAggregationInputSchema;
