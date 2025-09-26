import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ClauseUpdatetriggerWarningInputSchema } from './ClauseUpdatetriggerWarningInputSchema';
import { SeveritySchema } from './SeveritySchema';
import { EnumSeverityFieldUpdateOperationsInputSchema } from './EnumSeverityFieldUpdateOperationsInputSchema';
import { ClauseUpdatecategoriesInputSchema } from './ClauseUpdatecategoriesInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const ClauseUncheckedUpdateManyWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.ClauseUncheckedUpdateManyWithoutAnalysisRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerWarning: z.union([ z.lazy(() => ClauseUpdatetriggerWarningInputSchema),z.string().array() ]).optional(),
  severity: z.union([ z.lazy(() => SeveritySchema),z.lazy(() => EnumSeverityFieldUpdateOperationsInputSchema) ]).optional(),
  riskScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.union([ z.lazy(() => ClauseUpdatecategoriesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUncheckedUpdateManyWithoutAnalysisRequestInput>;

export default ClauseUncheckedUpdateManyWithoutAnalysisRequestInputSchema;
