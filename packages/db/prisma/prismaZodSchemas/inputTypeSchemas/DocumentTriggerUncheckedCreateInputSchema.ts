import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerUncheckedCreateInputSchema: z.ZodType<Prisma.DocumentTriggerUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  documentId: z.string(),
  triggerId: z.string(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.DocumentTriggerUncheckedCreateInput>;

export default DocumentTriggerUncheckedCreateInputSchema;
