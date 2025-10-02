import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutDocumentRulesInputSchema } from './DocumentCreateNestedOneWithoutDocumentRulesInputSchema';

export const DocumentTriggerCreateWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerCreateWithoutTriggerInput> = z.strictObject({
  id: z.cuid().optional(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutDocumentRulesInputSchema),
});

export default DocumentTriggerCreateWithoutTriggerInputSchema;
