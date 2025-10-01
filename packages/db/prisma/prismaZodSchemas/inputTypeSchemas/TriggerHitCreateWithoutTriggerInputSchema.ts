import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ClauseCreateNestedOneWithoutTriggerHitsInputSchema } from './ClauseCreateNestedOneWithoutTriggerHitsInputSchema';

export const TriggerHitCreateWithoutTriggerInputSchema: z.ZodType<Prisma.TriggerHitCreateWithoutTriggerInput> = z.object({
  id: z.string().cuid().optional(),
  confidence: z.number().optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  clause: z.lazy(() => ClauseCreateNestedOneWithoutTriggerHitsInputSchema)
}).strict() as z.ZodType<Prisma.TriggerHitCreateWithoutTriggerInput>;

export default TriggerHitCreateWithoutTriggerInputSchema;
