import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerCreateManyDocumentInputSchema } from './DocumentTriggerCreateManyDocumentInputSchema';

export const DocumentTriggerCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.DocumentTriggerCreateManyDocumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DocumentTriggerCreateManyDocumentInputSchema),z.lazy(() => DocumentTriggerCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateManyDocumentInputEnvelope>;

export default DocumentTriggerCreateManyDocumentInputEnvelopeSchema;
