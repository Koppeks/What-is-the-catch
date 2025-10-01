import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerCreateManyTriggerInputSchema } from './DocumentTriggerCreateManyTriggerInputSchema';

export const DocumentTriggerCreateManyTriggerInputEnvelopeSchema: z.ZodType<Prisma.DocumentTriggerCreateManyTriggerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DocumentTriggerCreateManyTriggerInputSchema),z.lazy(() => DocumentTriggerCreateManyTriggerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateManyTriggerInputEnvelope>;

export default DocumentTriggerCreateManyTriggerInputEnvelopeSchema;
