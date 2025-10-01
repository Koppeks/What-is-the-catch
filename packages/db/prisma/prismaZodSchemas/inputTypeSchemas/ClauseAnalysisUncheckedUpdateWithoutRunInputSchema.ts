import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { SeveritySchema } from './SeveritySchema';
import { EnumSeverityFieldUpdateOperationsInputSchema } from './EnumSeverityFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ClauseAnalysisUpdatetriggerWarningsInputSchema } from './ClauseAnalysisUpdatetriggerWarningsInputSchema';
import { CategoryHitUncheckedUpdateManyWithoutClauseAnalysisNestedInputSchema } from './CategoryHitUncheckedUpdateManyWithoutClauseAnalysisNestedInputSchema';

export const ClauseAnalysisUncheckedUpdateWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisUncheckedUpdateWithoutRunInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clauseId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  severity: z.union([ z.lazy(() => SeveritySchema),z.lazy(() => EnumSeverityFieldUpdateOperationsInputSchema) ]).optional(),
  riskScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisUpdatetriggerWarningsInputSchema),z.string().array() ]).optional(),
  categoryHits: z.lazy(() => CategoryHitUncheckedUpdateManyWithoutClauseAnalysisNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisUncheckedUpdateWithoutRunInput>;

export default ClauseAnalysisUncheckedUpdateWithoutRunInputSchema;
