import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TriggerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerOrderByRelationAggregateInput>;

export default TriggerOrderByRelationAggregateInputSchema;
