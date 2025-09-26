import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const TriggerHitCreateManyClauseInputSchema: z.ZodType<Prisma.TriggerHitCreateManyClauseInput> = z.object({
  id: z.string().cuid().optional(),
  triggerId: z.string(),
  confidence: z.number().optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerHitCreateManyClauseInput>;

export default TriggerHitCreateManyClauseInputSchema;
