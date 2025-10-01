import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { ClauseAnalysisCreatetriggerWarningsInputSchema } from './ClauseAnalysisCreatetriggerWarningsInputSchema';

export const ClauseAnalysisCreateManyClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateManyClauseInput> = z.object({
  id: z.string().cuid().optional(),
  runId: z.string(),
  severity: z.lazy(() => SeveritySchema).optional(),
  riskScore: z.number().int().optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisCreatetriggerWarningsInputSchema),z.string().array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreateManyClauseInput>;

export default ClauseAnalysisCreateManyClauseInputSchema;
