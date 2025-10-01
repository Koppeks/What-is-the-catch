import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutDocumentRulesNestedInputSchema } from './DocumentUpdateOneRequiredWithoutDocumentRulesNestedInputSchema';

export const DocumentTriggerUpdateWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateWithoutTriggerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  minConfidence: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  document: z.lazy(() => DocumentUpdateOneRequiredWithoutDocumentRulesNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerUpdateWithoutTriggerInput>;

export default DocumentTriggerUpdateWithoutTriggerInputSchema;
