import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { SeveritySchema } from './SeveritySchema';
import { EnumSeverityFieldUpdateOperationsInputSchema } from './EnumSeverityFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ClauseAnalysisUpdatetriggerWarningsInputSchema } from './ClauseAnalysisUpdatetriggerWarningsInputSchema';
import { AnalysisRunUpdateOneRequiredWithoutClauseAnalysesNestedInputSchema } from './AnalysisRunUpdateOneRequiredWithoutClauseAnalysesNestedInputSchema';
import { CategoryHitUpdateManyWithoutClauseAnalysisNestedInputSchema } from './CategoryHitUpdateManyWithoutClauseAnalysisNestedInputSchema';

export const ClauseAnalysisUpdateWithoutClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdateWithoutClauseInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  severity: z.union([ z.lazy(() => SeveritySchema), z.lazy(() => EnumSeverityFieldUpdateOperationsInputSchema) ]).optional(),
  riskScore: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisUpdatetriggerWarningsInputSchema), z.string().array() ]).optional(),
  run: z.lazy(() => AnalysisRunUpdateOneRequiredWithoutClauseAnalysesNestedInputSchema).optional(),
  categoryHits: z.lazy(() => CategoryHitUpdateManyWithoutClauseAnalysisNestedInputSchema).optional(),
});

export default ClauseAnalysisUpdateWithoutClauseInputSchema;
