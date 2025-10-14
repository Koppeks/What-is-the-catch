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
import { TriggerUpdateOneWithoutMergeFromNestedInputSchema } from './TriggerUpdateOneWithoutMergeFromNestedInputSchema';
import { TriggerUpdateManyWithoutMergedIntoNestedInputSchema } from './TriggerUpdateManyWithoutMergedIntoNestedInputSchema';
import { DocumentTriggerUpdateManyWithoutTriggerNestedInputSchema } from './DocumentTriggerUpdateManyWithoutTriggerNestedInputSchema';

export const TriggerUpdateWithoutClauseCategoryInputSchema: z.ZodType<Prisma.TriggerUpdateWithoutClauseCategoryInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patterns: z.union([ z.lazy(() => TriggerUpdatepatternsInputSchema), z.string().array() ]).optional(),
  source: z.union([ z.lazy(() => TriggerSourceSchema), z.lazy(() => EnumTriggerSourceFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => TriggerStateSchema), z.lazy(() => EnumTriggerStateFieldUpdateOperationsInputSchema) ]).optional(),
  reviewNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promotedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  defaultSeverity: z.union([ z.lazy(() => SeveritySchema), z.lazy(() => NullableEnumSeverityFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mergedInto: z.lazy(() => TriggerUpdateOneWithoutMergeFromNestedInputSchema).optional(),
  mergeFrom: z.lazy(() => TriggerUpdateManyWithoutMergedIntoNestedInputSchema).optional(),
  documentRules: z.lazy(() => DocumentTriggerUpdateManyWithoutTriggerNestedInputSchema).optional(),
});

export default TriggerUpdateWithoutClauseCategoryInputSchema;
