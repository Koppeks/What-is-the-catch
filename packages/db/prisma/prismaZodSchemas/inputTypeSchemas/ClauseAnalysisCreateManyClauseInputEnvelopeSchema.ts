import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateManyClauseInputSchema } from './ClauseAnalysisCreateManyClauseInputSchema';

export const ClauseAnalysisCreateManyClauseInputEnvelopeSchema: z.ZodType<Prisma.ClauseAnalysisCreateManyClauseInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ClauseAnalysisCreateManyClauseInputSchema), z.lazy(() => ClauseAnalysisCreateManyClauseInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ClauseAnalysisCreateManyClauseInputEnvelopeSchema;
