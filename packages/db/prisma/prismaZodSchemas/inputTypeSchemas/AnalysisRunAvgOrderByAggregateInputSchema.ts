import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AnalysisRunAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AnalysisRunAvgOrderByAggregateInput> = z.strictObject({
  overallRisk: z.lazy(() => SortOrderSchema).optional(),
});

export default AnalysisRunAvgOrderByAggregateInputSchema;
