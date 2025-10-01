import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateManyDocumentInputSchema } from './ClauseCreateManyDocumentInputSchema';

export const ClauseCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.ClauseCreateManyDocumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClauseCreateManyDocumentInputSchema),z.lazy(() => ClauseCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.ClauseCreateManyDocumentInputEnvelope>;

export default ClauseCreateManyDocumentInputEnvelopeSchema;
