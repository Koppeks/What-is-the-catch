import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerUncheckedCreateInputSchema: z.ZodType<Prisma.DocumentTriggerUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  triggerId: z.string(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
});

export default DocumentTriggerUncheckedCreateInputSchema;
