import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutClausesNestedInputSchema } from './DocumentUpdateOneRequiredWithoutClausesNestedInputSchema';
import { ClauseUpdateOneWithoutChildrenNestedInputSchema } from './ClauseUpdateOneWithoutChildrenNestedInputSchema';
import { ClauseUpdateManyWithoutParentNestedInputSchema } from './ClauseUpdateManyWithoutParentNestedInputSchema';

export const ClauseUpdateInputSchema: z.ZodType<Prisma.ClauseUpdateInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ordinalPath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  depth: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  document: z.lazy(() => DocumentUpdateOneRequiredWithoutClausesNestedInputSchema).optional(),
  parent: z.lazy(() => ClauseUpdateOneWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => ClauseUpdateManyWithoutParentNestedInputSchema).optional(),
});

export default ClauseUpdateInputSchema;
