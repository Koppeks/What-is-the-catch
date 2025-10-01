import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AnalysisRunMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AnalysisRunMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  engineVersion: z.lazy(() => SortOrderSchema).optional(),
  startedAt: z.lazy(() => SortOrderSchema).optional(),
  finishedAt: z.lazy(() => SortOrderSchema).optional(),
  overallRisk: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRunMaxOrderByAggregateInput>;

export default AnalysisRunMaxOrderByAggregateInputSchema;
