import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ClauseAnalysisCountOrderByAggregateInputSchema } from './ClauseAnalysisCountOrderByAggregateInputSchema';
import { ClauseAnalysisAvgOrderByAggregateInputSchema } from './ClauseAnalysisAvgOrderByAggregateInputSchema';
import { ClauseAnalysisMaxOrderByAggregateInputSchema } from './ClauseAnalysisMaxOrderByAggregateInputSchema';
import { ClauseAnalysisMinOrderByAggregateInputSchema } from './ClauseAnalysisMinOrderByAggregateInputSchema';
import { ClauseAnalysisSumOrderByAggregateInputSchema } from './ClauseAnalysisSumOrderByAggregateInputSchema';

export const ClauseAnalysisOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClauseAnalysisOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  runId: z.lazy(() => SortOrderSchema).optional(),
  clauseId: z.lazy(() => SortOrderSchema).optional(),
  severity: z.lazy(() => SortOrderSchema).optional(),
  riskScore: z.lazy(() => SortOrderSchema).optional(),
  triggerWarnings: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClauseAnalysisCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ClauseAnalysisAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClauseAnalysisMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClauseAnalysisMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ClauseAnalysisSumOrderByAggregateInputSchema).optional(),
});

export default ClauseAnalysisOrderByWithAggregationInputSchema;
