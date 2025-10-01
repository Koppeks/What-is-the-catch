import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { ClauseAnalysisCreatetriggerWarningsInputSchema } from './ClauseAnalysisCreatetriggerWarningsInputSchema';
import { CategoryHitUncheckedCreateNestedManyWithoutClauseAnalysisInputSchema } from './CategoryHitUncheckedCreateNestedManyWithoutClauseAnalysisInputSchema';

export const ClauseAnalysisUncheckedCreateWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisUncheckedCreateWithoutRunInput> = z.object({
  id: z.string().cuid().optional(),
  clauseId: z.string(),
  severity: z.lazy(() => SeveritySchema).optional(),
  riskScore: z.number().int().optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisCreatetriggerWarningsInputSchema),z.string().array() ]).optional(),
  categoryHits: z.lazy(() => CategoryHitUncheckedCreateNestedManyWithoutClauseAnalysisInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisUncheckedCreateWithoutRunInput>;

export default ClauseAnalysisUncheckedCreateWithoutRunInputSchema;
