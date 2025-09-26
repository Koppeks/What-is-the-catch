import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AnalysisRequestMinOrderByAggregateInputSchema: z.ZodType<Prisma.AnalysisRequestMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sourceUrl: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestMinOrderByAggregateInput>;

export default AnalysisRequestMinOrderByAggregateInputSchema;
