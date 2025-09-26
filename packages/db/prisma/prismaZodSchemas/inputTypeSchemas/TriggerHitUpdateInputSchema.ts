import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ClauseUpdateOneRequiredWithoutHitsNestedInputSchema } from './ClauseUpdateOneRequiredWithoutHitsNestedInputSchema';
import { TriggerUpdateOneRequiredWithoutHitsNestedInputSchema } from './TriggerUpdateOneRequiredWithoutHitsNestedInputSchema';

export const TriggerHitUpdateInputSchema: z.ZodType<Prisma.TriggerHitUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  clause: z.lazy(() => ClauseUpdateOneRequiredWithoutHitsNestedInputSchema).optional(),
  trigger: z.lazy(() => TriggerUpdateOneRequiredWithoutHitsNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerHitUpdateInput>;

export default TriggerHitUpdateInputSchema;
