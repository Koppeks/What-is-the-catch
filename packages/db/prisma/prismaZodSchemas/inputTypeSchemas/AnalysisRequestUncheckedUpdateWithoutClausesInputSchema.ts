import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TypeRequestSchema } from './TypeRequestSchema';
import { EnumTypeRequestFieldUpdateOperationsInputSchema } from './EnumTypeRequestFieldUpdateOperationsInputSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { EnumAnalysisStatusFieldUpdateOperationsInputSchema } from './EnumAnalysisStatusFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TriggerUncheckedUpdateManyWithoutAnalysisRequestNestedInputSchema } from './TriggerUncheckedUpdateManyWithoutAnalysisRequestNestedInputSchema';

export const AnalysisRequestUncheckedUpdateWithoutClausesInputSchema: z.ZodType<Prisma.AnalysisRequestUncheckedUpdateWithoutClausesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TypeRequestSchema),z.lazy(() => EnumTypeRequestFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AnalysisStatusSchema),z.lazy(() => EnumAnalysisStatusFieldUpdateOperationsInputSchema) ]).optional(),
  sourceUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  triggers: z.lazy(() => TriggerUncheckedUpdateManyWithoutAnalysisRequestNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestUncheckedUpdateWithoutClausesInput>;

export default AnalysisRequestUncheckedUpdateWithoutClausesInputSchema;
