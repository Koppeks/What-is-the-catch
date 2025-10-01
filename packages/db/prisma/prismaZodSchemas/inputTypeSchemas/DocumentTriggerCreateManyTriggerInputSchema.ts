import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerCreateManyTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerCreateManyTriggerInput> = z.object({
  id: z.string().cuid().optional(),
  documentId: z.string(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateManyTriggerInput>;

export default DocumentTriggerCreateManyTriggerInputSchema;
