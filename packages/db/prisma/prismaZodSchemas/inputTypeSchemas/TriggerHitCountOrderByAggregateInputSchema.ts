import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerHitCountOrderByAggregateInputSchema: z.ZodType<Prisma.TriggerHitCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  clauseId: z.lazy(() => SortOrderSchema).optional(),
  triggerId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.lazy(() => SortOrderSchema).optional(),
  matches: z.lazy(() => SortOrderSchema).optional(),
});

export default TriggerHitCountOrderByAggregateInputSchema;
