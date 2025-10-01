import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunCreateManyDocumentInputSchema } from './AnalysisRunCreateManyDocumentInputSchema';

export const AnalysisRunCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.AnalysisRunCreateManyDocumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AnalysisRunCreateManyDocumentInputSchema),z.lazy(() => AnalysisRunCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.AnalysisRunCreateManyDocumentInputEnvelope>;

export default AnalysisRunCreateManyDocumentInputEnvelopeSchema;
