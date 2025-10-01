import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ClauseUncheckedUpdateManyWithoutParentNestedInputSchema } from './ClauseUncheckedUpdateManyWithoutParentNestedInputSchema';
import { TriggerHitUncheckedUpdateManyWithoutClauseNestedInputSchema } from './TriggerHitUncheckedUpdateManyWithoutClauseNestedInputSchema';

export const ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.ClauseUncheckedUpdateWithoutClauseAnalysisInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  documentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ordinalPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  depth: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  children: z.lazy(() => ClauseUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  TriggerHits: z.lazy(() => TriggerHitUncheckedUpdateManyWithoutClauseNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseUncheckedUpdateWithoutClauseAnalysisInput>;

export default ClauseUncheckedUpdateWithoutClauseAnalysisInputSchema;
