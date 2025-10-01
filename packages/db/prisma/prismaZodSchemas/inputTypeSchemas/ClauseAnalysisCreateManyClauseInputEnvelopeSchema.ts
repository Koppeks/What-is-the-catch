import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateManyClauseInputSchema } from './ClauseAnalysisCreateManyClauseInputSchema';

export const ClauseAnalysisCreateManyClauseInputEnvelopeSchema: z.ZodType<Prisma.ClauseAnalysisCreateManyClauseInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClauseAnalysisCreateManyClauseInputSchema),z.lazy(() => ClauseAnalysisCreateManyClauseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreateManyClauseInputEnvelope>;

export default ClauseAnalysisCreateManyClauseInputEnvelopeSchema;
