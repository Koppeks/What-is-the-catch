import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { TriggerUpdateOneRequiredWithoutHitsNestedInputSchema } from './TriggerUpdateOneRequiredWithoutHitsNestedInputSchema';

export const TriggerHitUpdateWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitUpdateWithoutClauseInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  confidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  matches: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  trigger: z.lazy(() => TriggerUpdateOneRequiredWithoutHitsNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerHitUpdateWithoutClauseInput>;

export default TriggerHitUpdateWithoutClauseInputSchema;
