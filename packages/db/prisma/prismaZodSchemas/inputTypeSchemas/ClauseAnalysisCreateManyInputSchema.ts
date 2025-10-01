import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { ClauseAnalysisCreatetriggerWarningsInputSchema } from './ClauseAnalysisCreatetriggerWarningsInputSchema';

export const ClauseAnalysisCreateManyInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  runId: z.string(),
  clauseId: z.string(),
  severity: z.lazy(() => SeveritySchema).optional(),
  riskScore: z.number().int().optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisCreatetriggerWarningsInputSchema),z.string().array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreateManyInput>;

export default ClauseAnalysisCreateManyInputSchema;
