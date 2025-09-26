import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AnalysisRequestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AnalysisRequestOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestOrderByRelationAggregateInput>;

export default AnalysisRequestOrderByRelationAggregateInputSchema;
