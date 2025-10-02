import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAnalysisAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseAnalysisAvgOrderByAggregateInput> = z.strictObject({
  riskScore: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseAnalysisAvgOrderByAggregateInputSchema;
