import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TriggerOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TriggerOrderByRelationAggregateInputSchema;
