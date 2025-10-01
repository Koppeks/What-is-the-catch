import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TriggerUpdateOneRequiredWithoutDocumentRulesNestedInputSchema } from './TriggerUpdateOneRequiredWithoutDocumentRulesNestedInputSchema';

export const DocumentTriggerUpdateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateWithoutDocumentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  minConfidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  trigger: z.lazy(() => TriggerUpdateOneRequiredWithoutDocumentRulesNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerUpdateWithoutDocumentInput>;

export default DocumentTriggerUpdateWithoutDocumentInputSchema;
