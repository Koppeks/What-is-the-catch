import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const TriggerHitUncheckedUpdateWithoutTriggerInputSchema: z.ZodType<Prisma.TriggerHitUncheckedUpdateWithoutTriggerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clauseId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerHitUncheckedUpdateWithoutTriggerInput>;

export default TriggerHitUncheckedUpdateWithoutTriggerInputSchema;
