import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerHitAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TriggerHitAvgOrderByAggregateInput> = z.strictObject({
  confidence: z.lazy(() => SortOrderSchema).optional(),
});

export default TriggerHitAvgOrderByAggregateInputSchema;
