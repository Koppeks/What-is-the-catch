import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerUncheckedCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  triggerId: z.string(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.DocumentTriggerUncheckedCreateWithoutDocumentInput>;

export default DocumentTriggerUncheckedCreateWithoutDocumentInputSchema;
