import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ClauseCountOrderByAggregateInputSchema } from './ClauseCountOrderByAggregateInputSchema';
import { ClauseAvgOrderByAggregateInputSchema } from './ClauseAvgOrderByAggregateInputSchema';
import { ClauseMaxOrderByAggregateInputSchema } from './ClauseMaxOrderByAggregateInputSchema';
import { ClauseMinOrderByAggregateInputSchema } from './ClauseMinOrderByAggregateInputSchema';
import { ClauseSumOrderByAggregateInputSchema } from './ClauseSumOrderByAggregateInputSchema';

export const ClauseOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClauseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analysisRequestId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  triggerWarning: z.lazy(() => SortOrderSchema).optional(),
  severity: z.lazy(() => SortOrderSchema).optional(),
  riskScore: z.lazy(() => SortOrderSchema).optional(),
  categories: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClauseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ClauseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClauseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClauseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ClauseSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseOrderByWithAggregationInput>;

export default ClauseOrderByWithAggregationInputSchema;
