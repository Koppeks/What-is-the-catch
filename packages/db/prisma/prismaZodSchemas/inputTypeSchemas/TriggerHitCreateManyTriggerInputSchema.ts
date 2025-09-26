import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const TriggerHitCreateManyTriggerInputSchema: z.ZodType<Prisma.TriggerHitCreateManyTriggerInput> = z.object({
  id: z.string().cuid().optional(),
  clauseId: z.string(),
  confidence: z.number().optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerHitCreateManyTriggerInput>;

export default TriggerHitCreateManyTriggerInputSchema;
