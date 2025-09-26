import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerHitMinOrderByAggregateInputSchema: z.ZodType<Prisma.TriggerHitMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clauseId: z.lazy(() => SortOrderSchema).optional(),
  triggerId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerHitMinOrderByAggregateInput>;

export default TriggerHitMinOrderByAggregateInputSchema;
