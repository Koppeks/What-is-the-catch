import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';

export const TriggerHitScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TriggerHitScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TriggerHitScalarWhereWithAggregatesInputSchema),z.lazy(() => TriggerHitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TriggerHitScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TriggerHitScalarWhereWithAggregatesInputSchema),z.lazy(() => TriggerHitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  clauseId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  triggerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  confidence: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  matches: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerHitScalarWhereWithAggregatesInput>;

export default TriggerHitScalarWhereWithAggregatesInputSchema;
