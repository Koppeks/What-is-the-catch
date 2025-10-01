import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { ClauseAnalysisCreatetriggerWarningsInputSchema } from './ClauseAnalysisCreatetriggerWarningsInputSchema';
import { ClauseCreateNestedOneWithoutClauseAnalysisInputSchema } from './ClauseCreateNestedOneWithoutClauseAnalysisInputSchema';
import { CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema } from './CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema';

export const ClauseAnalysisCreateWithoutRunInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateWithoutRunInput> = z.object({
  id: z.string().cuid().optional(),
  severity: z.lazy(() => SeveritySchema).optional(),
  riskScore: z.number().int().optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisCreatetriggerWarningsInputSchema),z.string().array() ]).optional(),
  clause: z.lazy(() => ClauseCreateNestedOneWithoutClauseAnalysisInputSchema),
  categoryHits: z.lazy(() => CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreateWithoutRunInput>;

export default ClauseAnalysisCreateWithoutRunInputSchema;
