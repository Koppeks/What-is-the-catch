import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutDocumentRulesInputSchema } from './DocumentCreateNestedOneWithoutDocumentRulesInputSchema';

export const DocumentTriggerCreateWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerCreateWithoutTriggerInput> = z.object({
  id: z.string().cuid().optional(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutDocumentRulesInputSchema)
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateWithoutTriggerInput>;

export default DocumentTriggerCreateWithoutTriggerInputSchema;
