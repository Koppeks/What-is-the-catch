import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAnalysisCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseAnalysisCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  runId: z.lazy(() => SortOrderSchema).optional(),
  clauseId: z.lazy(() => SortOrderSchema).optional(),
  severity: z.lazy(() => SortOrderSchema).optional(),
  riskScore: z.lazy(() => SortOrderSchema).optional(),
  triggerWarnings: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseAnalysisCountOrderByAggregateInputSchema;
