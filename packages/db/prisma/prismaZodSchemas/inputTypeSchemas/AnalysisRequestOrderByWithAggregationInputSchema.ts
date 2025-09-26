import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AnalysisRequestCountOrderByAggregateInputSchema } from './AnalysisRequestCountOrderByAggregateInputSchema';
import { AnalysisRequestMaxOrderByAggregateInputSchema } from './AnalysisRequestMaxOrderByAggregateInputSchema';
import { AnalysisRequestMinOrderByAggregateInputSchema } from './AnalysisRequestMinOrderByAggregateInputSchema';

export const AnalysisRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.AnalysisRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sourceUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AnalysisRequestCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AnalysisRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AnalysisRequestMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestOrderByWithAggregationInput>;

export default AnalysisRequestOrderByWithAggregationInputSchema;
