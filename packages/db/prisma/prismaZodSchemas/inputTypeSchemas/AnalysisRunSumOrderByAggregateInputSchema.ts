import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AnalysisRunSumOrderByAggregateInputSchema: z.ZodType<Prisma.AnalysisRunSumOrderByAggregateInput> = z.object({
  overallRisk: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRunSumOrderByAggregateInput>;

export default AnalysisRunSumOrderByAggregateInputSchema;
