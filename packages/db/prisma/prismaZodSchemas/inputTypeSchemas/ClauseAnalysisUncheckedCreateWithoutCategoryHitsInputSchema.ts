import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { ClauseAnalysisCreatetriggerWarningsInputSchema } from './ClauseAnalysisCreatetriggerWarningsInputSchema';

export const ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema: z.ZodType<Prisma.ClauseAnalysisUncheckedCreateWithoutCategoryHitsInput> = z.strictObject({
  id: z.cuid().optional(),
  runId: z.string(),
  clauseId: z.string(),
  severity: z.lazy(() => SeveritySchema).optional(),
  riskScore: z.number().int().optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisCreatetriggerWarningsInputSchema), z.string().array() ]).optional(),
});

export default ClauseAnalysisUncheckedCreateWithoutCategoryHitsInputSchema;
