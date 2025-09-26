import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TriggerHitCountOrderByAggregateInputSchema } from './TriggerHitCountOrderByAggregateInputSchema';
import { TriggerHitAvgOrderByAggregateInputSchema } from './TriggerHitAvgOrderByAggregateInputSchema';
import { TriggerHitMaxOrderByAggregateInputSchema } from './TriggerHitMaxOrderByAggregateInputSchema';
import { TriggerHitMinOrderByAggregateInputSchema } from './TriggerHitMinOrderByAggregateInputSchema';
import { TriggerHitSumOrderByAggregateInputSchema } from './TriggerHitSumOrderByAggregateInputSchema';

export const TriggerHitOrderByWithAggregationInputSchema: z.ZodType<Prisma.TriggerHitOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clauseId: z.lazy(() => SortOrderSchema).optional(),
  triggerId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  matches: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TriggerHitCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TriggerHitAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TriggerHitMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TriggerHitMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TriggerHitSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerHitOrderByWithAggregationInput>;

export default TriggerHitOrderByWithAggregationInputSchema;
