import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerHitAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TriggerHitAvgOrderByAggregateInput> = z.object({
  confidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerHitAvgOrderByAggregateInput>;

export default TriggerHitAvgOrderByAggregateInputSchema;
