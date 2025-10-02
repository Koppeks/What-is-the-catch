import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerCreateManyTriggerInputSchema } from './DocumentTriggerCreateManyTriggerInputSchema';

export const DocumentTriggerCreateManyTriggerInputEnvelopeSchema: z.ZodType<Prisma.DocumentTriggerCreateManyTriggerInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => DocumentTriggerCreateManyTriggerInputSchema), z.lazy(() => DocumentTriggerCreateManyTriggerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default DocumentTriggerCreateManyTriggerInputEnvelopeSchema;
