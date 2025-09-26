import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerHitSumOrderByAggregateInputSchema: z.ZodType<Prisma.TriggerHitSumOrderByAggregateInput> = z.object({
  confidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerHitSumOrderByAggregateInput>;

export default TriggerHitSumOrderByAggregateInputSchema;
