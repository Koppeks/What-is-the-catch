import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const TriggerHitUncheckedCreateWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitUncheckedCreateWithoutClauseInput> = z.strictObject({
  id: z.cuid().optional(),
  triggerId: z.string(),
  confidence: z.number().optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
});

export default TriggerHitUncheckedCreateWithoutClauseInputSchema;
