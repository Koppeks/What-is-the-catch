import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerDocumentIdTriggerIdCompoundUniqueInputSchema: z.ZodType<Prisma.DocumentTriggerDocumentIdTriggerIdCompoundUniqueInput> = z.object({
  documentId: z.string(),
  triggerId: z.string()
}).strict() as z.ZodType<Prisma.DocumentTriggerDocumentIdTriggerIdCompoundUniqueInput>;

export default DocumentTriggerDocumentIdTriggerIdCompoundUniqueInputSchema;
