import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerHitOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TriggerHitOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TriggerHitOrderByRelationAggregateInputSchema;
