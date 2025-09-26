import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TriggerCountOrderByAggregateInputSchema } from './TriggerCountOrderByAggregateInputSchema';
import { TriggerMaxOrderByAggregateInputSchema } from './TriggerMaxOrderByAggregateInputSchema';
import { TriggerMinOrderByAggregateInputSchema } from './TriggerMinOrderByAggregateInputSchema';

export const TriggerOrderByWithAggregationInputSchema: z.ZodType<Prisma.TriggerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  patterns: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  mergedIntoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewNotes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  promotedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  clauseTypeId: z.lazy(() => SortOrderSchema).optional(),
  defaultSeverity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TriggerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TriggerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TriggerMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerOrderByWithAggregationInput>;

export default TriggerOrderByWithAggregationInputSchema;
