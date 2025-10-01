import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAnalysisAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseAnalysisAvgOrderByAggregateInput> = z.object({
  riskScore: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisAvgOrderByAggregateInput>;

export default ClauseAnalysisAvgOrderByAggregateInputSchema;
