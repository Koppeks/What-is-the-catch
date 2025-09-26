import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ClauseOrderByRelationAggregateInputSchema } from './ClauseOrderByRelationAggregateInputSchema';
import { TriggerOrderByRelationAggregateInputSchema } from './TriggerOrderByRelationAggregateInputSchema';

export const AnalysisRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.AnalysisRequestOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sourceUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  clauses: z.lazy(() => ClauseOrderByRelationAggregateInputSchema).optional(),
  triggers: z.lazy(() => TriggerOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestOrderByWithRelationInput>;

export default AnalysisRequestOrderByWithRelationInputSchema;
