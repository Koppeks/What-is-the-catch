import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerCreateManyDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerCreateManyDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  triggerId: z.string(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateManyDocumentInput>;

export default DocumentTriggerCreateManyDocumentInputSchema;
