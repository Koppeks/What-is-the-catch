import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ClauseOrderByWithRelationInputSchema } from './ClauseOrderByWithRelationInputSchema';
import { TriggerOrderByWithRelationInputSchema } from './TriggerOrderByWithRelationInputSchema';

export const TriggerHitOrderByWithRelationInputSchema: z.ZodType<Prisma.TriggerHitOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  clauseId: z.lazy(() => SortOrderSchema).optional(),
  triggerId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  matches: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clause: z.lazy(() => ClauseOrderByWithRelationInputSchema).optional(),
  trigger: z.lazy(() => TriggerOrderByWithRelationInputSchema).optional(),
});

export default TriggerHitOrderByWithRelationInputSchema;
