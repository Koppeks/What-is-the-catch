import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunCreateManyDocumentInputSchema } from './AnalysisRunCreateManyDocumentInputSchema';

export const AnalysisRunCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.AnalysisRunCreateManyDocumentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AnalysisRunCreateManyDocumentInputSchema), z.lazy(() => AnalysisRunCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default AnalysisRunCreateManyDocumentInputEnvelopeSchema;
