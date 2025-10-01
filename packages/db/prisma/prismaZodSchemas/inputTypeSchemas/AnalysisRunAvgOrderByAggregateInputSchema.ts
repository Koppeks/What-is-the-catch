import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AnalysisRunAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AnalysisRunAvgOrderByAggregateInput> = z.object({
  overallRisk: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRunAvgOrderByAggregateInput>;

export default AnalysisRunAvgOrderByAggregateInputSchema;
