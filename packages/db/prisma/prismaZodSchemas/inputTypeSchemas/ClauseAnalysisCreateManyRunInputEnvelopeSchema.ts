import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisCreateManyRunInputSchema } from './ClauseAnalysisCreateManyRunInputSchema';

export const ClauseAnalysisCreateManyRunInputEnvelopeSchema: z.ZodType<Prisma.ClauseAnalysisCreateManyRunInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClauseAnalysisCreateManyRunInputSchema),z.lazy(() => ClauseAnalysisCreateManyRunInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreateManyRunInputEnvelope>;

export default ClauseAnalysisCreateManyRunInputEnvelopeSchema;
