import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerHitOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TriggerHitOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerHitOrderByRelationAggregateInput>;

export default TriggerHitOrderByRelationAggregateInputSchema;
