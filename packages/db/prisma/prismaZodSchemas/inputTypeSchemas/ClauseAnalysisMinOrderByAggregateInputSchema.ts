import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAnalysisMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseAnalysisMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  runId: z.lazy(() => SortOrderSchema).optional(),
  clauseId: z.lazy(() => SortOrderSchema).optional(),
  severity: z.lazy(() => SortOrderSchema).optional(),
  riskScore: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisMinOrderByAggregateInput>;

export default ClauseAnalysisMinOrderByAggregateInputSchema;
