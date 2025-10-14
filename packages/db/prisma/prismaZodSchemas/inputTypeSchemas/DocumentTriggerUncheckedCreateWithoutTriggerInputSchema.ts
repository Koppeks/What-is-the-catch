import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerUncheckedCreateWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerUncheckedCreateWithoutTriggerInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  from: z.number().int(),
  to: z.number().int(),
});

export default DocumentTriggerUncheckedCreateWithoutTriggerInputSchema;
