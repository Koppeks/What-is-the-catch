import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerCreateManyTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerCreateManyTriggerInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
});

export default DocumentTriggerCreateManyTriggerInputSchema;
