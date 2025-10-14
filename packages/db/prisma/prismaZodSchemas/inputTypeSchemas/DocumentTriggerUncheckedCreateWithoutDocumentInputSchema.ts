import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerUncheckedCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  triggerId: z.string(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  from: z.number().int(),
  to: z.number().int(),
});

export default DocumentTriggerUncheckedCreateWithoutDocumentInputSchema;
