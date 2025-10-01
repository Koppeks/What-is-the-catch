import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseAnalysisOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ClauseAnalysisOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisOrderByRelationAggregateInput>;

export default ClauseAnalysisOrderByRelationAggregateInputSchema;
