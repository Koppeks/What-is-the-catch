import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { TriggerCreateNestedOneWithoutHitsInputSchema } from './TriggerCreateNestedOneWithoutHitsInputSchema';

export const TriggerHitCreateWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitCreateWithoutClauseInput> = z.strictObject({
  id: z.cuid().optional(),
  confidence: z.number().optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  trigger: z.lazy(() => TriggerCreateNestedOneWithoutHitsInputSchema),
});

export default TriggerHitCreateWithoutClauseInputSchema;
