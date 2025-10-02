import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AnalysisRunCountOrderByAggregateInputSchema } from './AnalysisRunCountOrderByAggregateInputSchema';
import { AnalysisRunAvgOrderByAggregateInputSchema } from './AnalysisRunAvgOrderByAggregateInputSchema';
import { AnalysisRunMaxOrderByAggregateInputSchema } from './AnalysisRunMaxOrderByAggregateInputSchema';
import { AnalysisRunMinOrderByAggregateInputSchema } from './AnalysisRunMinOrderByAggregateInputSchema';
import { AnalysisRunSumOrderByAggregateInputSchema } from './AnalysisRunSumOrderByAggregateInputSchema';

export const AnalysisRunOrderByWithAggregationInputSchema: z.ZodType<Prisma.AnalysisRunOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  engineVersion: z.lazy(() => SortOrderSchema).optional(),
  startedAt: z.lazy(() => SortOrderSchema).optional(),
  finishedAt: z.lazy(() => SortOrderSchema).optional(),
  overallRisk: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AnalysisRunCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AnalysisRunAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AnalysisRunMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AnalysisRunMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AnalysisRunSumOrderByAggregateInputSchema).optional(),
});

export default AnalysisRunOrderByWithAggregationInputSchema;
