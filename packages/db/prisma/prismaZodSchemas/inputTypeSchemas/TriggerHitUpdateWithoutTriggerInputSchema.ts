import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ClauseUpdateOneRequiredWithoutTriggerHitsNestedInputSchema } from './ClauseUpdateOneRequiredWithoutTriggerHitsNestedInputSchema';

export const TriggerHitUpdateWithoutTriggerInputSchema: z.ZodType<Prisma.TriggerHitUpdateWithoutTriggerInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  clause: z.lazy(() => ClauseUpdateOneRequiredWithoutTriggerHitsNestedInputSchema).optional(),
});

export default TriggerHitUpdateWithoutTriggerInputSchema;
