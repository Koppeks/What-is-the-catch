import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const TriggerHitCreateManyInputSchema: z.ZodType<Prisma.TriggerHitCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  clauseId: z.string(),
  triggerId: z.string(),
  confidence: z.number().optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
});

export default TriggerHitCreateManyInputSchema;
