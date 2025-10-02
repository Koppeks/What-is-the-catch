import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentTriggerDocumentIdTriggerIdCompoundUniqueInputSchema: z.ZodType<Prisma.DocumentTriggerDocumentIdTriggerIdCompoundUniqueInput> = z.strictObject({
  documentId: z.string(),
  triggerId: z.string(),
});

export default DocumentTriggerDocumentIdTriggerIdCompoundUniqueInputSchema;
