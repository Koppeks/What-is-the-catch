import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { SeveritySchema } from './SeveritySchema';
import { EnumSeverityFieldUpdateOperationsInputSchema } from './EnumSeverityFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ClauseAnalysisUpdatetriggerWarningsInputSchema } from './ClauseAnalysisUpdatetriggerWarningsInputSchema';
import { ClauseUpdateOneRequiredWithoutClauseAnalysisNestedInputSchema } from './ClauseUpdateOneRequiredWithoutClauseAnalysisNestedInputSchema';
import { CategoryHitUpdateManyWithoutClauseAnalysisNestedInputSchema } from './CategoryHitUpdateManyWithoutClauseAnalysisNestedInputSchema';

export const ClauseAnalysisUpdateWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateWithoutRunInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  severity: z.union([ z.lazy(() => SeveritySchema), z.lazy(() => EnumSeverityFieldUpdateOperationsInputSchema) ]).optional(),
  riskScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisUpdatetriggerWarningsInputSchema), z.string().array() ]).optional(),
  clause: z.lazy(() => ClauseUpdateOneRequiredWithoutClauseAnalysisNestedInputSchema).optional(),
  categoryHits: z.lazy(() => CategoryHitUpdateManyWithoutClauseAnalysisNestedInputSchema).optional(),
});

export default ClauseAnalysisUpdateWithoutRunInputSchema;
