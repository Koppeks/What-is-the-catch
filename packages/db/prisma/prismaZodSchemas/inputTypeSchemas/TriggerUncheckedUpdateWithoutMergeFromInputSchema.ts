import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TriggerUpdatepatternsInputSchema } from './TriggerUpdatepatternsInputSchema';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { EnumTriggerSourceFieldUpdateOperationsInputSchema } from './EnumTriggerSourceFieldUpdateOperationsInputSchema';
import { TriggerStateSchema } from './TriggerStateSchema';
import { EnumTriggerStateFieldUpdateOperationsInputSchema } from './EnumTriggerStateFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { SeveritySchema } from './SeveritySchema';
import { NullableEnumSeverityFieldUpdateOperationsInputSchema } from './NullableEnumSeverityFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TriggerHitUncheckedUpdateManyWithoutTriggerNestedInputSchema } from './TriggerHitUncheckedUpdateManyWithoutTriggerNestedInputSchema';
import { DocumentTriggerUncheckedUpdateManyWithoutTriggerNestedInputSchema } from './DocumentTriggerUncheckedUpdateManyWithoutTriggerNestedInputSchema';

export const TriggerUncheckedUpdateWithoutMergeFromInputSchema: z.ZodType<Prisma.TriggerUncheckedUpdateWithoutMergeFromInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patterns: z.union([ z.lazy(() => TriggerUpdatepatternsInputSchema),z.string().array() ]).optional(),
  source: z.union([ z.lazy(() => TriggerSourceSchema),z.lazy(() => EnumTriggerSourceFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => TriggerStateSchema),z.lazy(() => EnumTriggerStateFieldUpdateOperationsInputSchema) ]).optional(),
  mergedIntoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promotedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clauseCategoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  defaultSeverity: z.union([ z.lazy(() => SeveritySchema),z.lazy(() => NullableEnumSeverityFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hits: z.lazy(() => TriggerHitUncheckedUpdateManyWithoutTriggerNestedInputSchema).optional(),
  documentRules: z.lazy(() => DocumentTriggerUncheckedUpdateManyWithoutTriggerNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerUncheckedUpdateWithoutMergeFromInput>;

export default TriggerUncheckedUpdateWithoutMergeFromInputSchema;
