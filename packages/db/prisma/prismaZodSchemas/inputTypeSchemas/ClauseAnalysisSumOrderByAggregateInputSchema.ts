import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAnalysisSumOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseAnalysisSumOrderByAggregateInput> = z.strictObject({
  riskScore: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseAnalysisSumOrderByAggregateInputSchema;
