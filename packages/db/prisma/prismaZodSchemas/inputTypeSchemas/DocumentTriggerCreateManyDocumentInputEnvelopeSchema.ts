import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerCreateManyDocumentInputSchema } from './DocumentTriggerCreateManyDocumentInputSchema';

export const DocumentTriggerCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.DocumentTriggerCreateManyDocumentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => DocumentTriggerCreateManyDocumentInputSchema), z.lazy(() => DocumentTriggerCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default DocumentTriggerCreateManyDocumentInputEnvelopeSchema;
