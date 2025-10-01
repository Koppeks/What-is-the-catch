import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { EnumAnalysisStatusFieldUpdateOperationsInputSchema } from './EnumAnalysisStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutRunsNestedInputSchema } from './DocumentUpdateOneRequiredWithoutRunsNestedInputSchema';
import { ClauseAnalysisUpdateManyWithoutRunNestedInputSchema } from './ClauseAnalysisUpdateManyWithoutRunNestedInputSchema';

export const AnalysisRunUpdateInputSchema: z.ZodType<Prisma.AnalysisRunUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AnalysisStatusSchema),z.lazy(() => EnumAnalysisStatusFieldUpdateOperationsInputSchema) ]).optional(),
  engineVersion: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  finishedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  overallRisk: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  document: z.lazy(() => DocumentUpdateOneRequiredWithoutRunsNestedInputSchema).optional(),
  clauseAnalyses: z.lazy(() => ClauseAnalysisUpdateManyWithoutRunNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRunUpdateInput>;

export default AnalysisRunUpdateInputSchema;
