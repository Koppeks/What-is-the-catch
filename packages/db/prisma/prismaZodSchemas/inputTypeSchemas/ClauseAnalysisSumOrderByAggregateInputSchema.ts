import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAnalysisSumOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseAnalysisSumOrderByAggregateInput> = z.object({
  riskScore: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisSumOrderByAggregateInput>;

export default ClauseAnalysisSumOrderByAggregateInputSchema;
