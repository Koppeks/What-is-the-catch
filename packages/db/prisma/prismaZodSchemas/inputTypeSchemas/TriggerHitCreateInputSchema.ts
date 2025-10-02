import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ClauseCreateNestedOneWithoutTriggerHitsInputSchema } from './ClauseCreateNestedOneWithoutTriggerHitsInputSchema';
import { TriggerCreateNestedOneWithoutHitsInputSchema } from './TriggerCreateNestedOneWithoutHitsInputSchema';

export const TriggerHitCreateInputSchema: z.ZodType<Prisma.TriggerHitCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  confidence: z.number().optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  clause: z.lazy(() => ClauseCreateNestedOneWithoutTriggerHitsInputSchema),
  trigger: z.lazy(() => TriggerCreateNestedOneWithoutHitsInputSchema),
});

export default TriggerHitCreateInputSchema;
