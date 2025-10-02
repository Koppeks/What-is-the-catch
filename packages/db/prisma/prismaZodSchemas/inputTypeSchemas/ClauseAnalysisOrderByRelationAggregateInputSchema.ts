import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAnalysisOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ClauseAnalysisOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ClauseAnalysisOrderByRelationAggregateInputSchema;
