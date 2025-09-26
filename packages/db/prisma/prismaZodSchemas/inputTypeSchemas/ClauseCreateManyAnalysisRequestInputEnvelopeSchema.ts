import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateManyAnalysisRequestInputSchema } from './ClauseCreateManyAnalysisRequestInputSchema';

export const ClauseCreateManyAnalysisRequestInputEnvelopeSchema: z.ZodType<Prisma.ClauseCreateManyAnalysisRequestInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClauseCreateManyAnalysisRequestInputSchema),z.lazy(() => ClauseCreateManyAnalysisRequestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.ClauseCreateManyAnalysisRequestInputEnvelope>;

export default ClauseCreateManyAnalysisRequestInputEnvelopeSchema;
