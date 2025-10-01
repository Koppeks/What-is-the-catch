import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DocumentKindSchema } from './DocumentKindSchema';
import { NullableEnumDocumentKindFieldUpdateOperationsInputSchema } from './NullableEnumDocumentKindFieldUpdateOperationsInputSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { EnumTypeRequestFieldUpdateOperationsInputSchema } from './EnumTypeRequestFieldUpdateOperationsInputSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { EnumAnalysisStatusFieldUpdateOperationsInputSchema } from './EnumAnalysisStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ClauseUpdateManyWithoutDocumentNestedInputSchema } from './ClauseUpdateManyWithoutDocumentNestedInputSchema';
import { DocumentTriggerUpdateManyWithoutDocumentNestedInputSchema } from './DocumentTriggerUpdateManyWithoutDocumentNestedInputSchema';

export const DocumentUpdateWithoutRunsInputSchema: z.ZodType<Prisma.DocumentUpdateWithoutRunsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  kind: z.union([ z.lazy(() => DocumentKindSchema),z.lazy(() => NullableEnumDocumentKindFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => TypeRequestSchema),z.lazy(() => EnumTypeRequestFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AnalysisStatusSchema),z.lazy(() => EnumAnalysisStatusFieldUpdateOperationsInputSchema) ]).optional(),
  sourceUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  clauses: z.lazy(() => ClauseUpdateManyWithoutDocumentNestedInputSchema).optional(),
  documentRules: z.lazy(() => DocumentTriggerUpdateManyWithoutDocumentNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentUpdateWithoutRunsInput>;

export default DocumentUpdateWithoutRunsInputSchema;
