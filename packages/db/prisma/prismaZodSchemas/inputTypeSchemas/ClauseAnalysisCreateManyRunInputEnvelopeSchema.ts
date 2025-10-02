import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateManyRunInputSchema } from './ClauseAnalysisCreateManyRunInputSchema';

export const ClauseAnalysisCreateManyRunInputEnvelopeSchema: z.ZodType<Prisma.ClauseAnalysisCreateManyRunInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ClauseAnalysisCreateManyRunInputSchema), z.lazy(() => ClauseAnalysisCreateManyRunInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ClauseAnalysisCreateManyRunInputEnvelopeSchema;
