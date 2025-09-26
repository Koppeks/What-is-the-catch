import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analysisRequestId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  severity: z.lazy(() => SortOrderSchema).optional(),
  riskScore: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseMaxOrderByAggregateInput>;

export default ClauseMaxOrderByAggregateInputSchema;
