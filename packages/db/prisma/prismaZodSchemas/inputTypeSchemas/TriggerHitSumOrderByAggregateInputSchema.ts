import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerHitSumOrderByAggregateInputSchema: z.ZodType<Prisma.TriggerHitSumOrderByAggregateInput> = z.strictObject({
  confidence: z.lazy(() => SortOrderSchema).optional(),
});

export default TriggerHitSumOrderByAggregateInputSchema;
