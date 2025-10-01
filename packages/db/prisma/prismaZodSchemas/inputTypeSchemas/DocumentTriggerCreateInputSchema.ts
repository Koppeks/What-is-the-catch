import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutDocumentRulesInputSchema } from './DocumentCreateNestedOneWithoutDocumentRulesInputSchema';
import { TriggerCreateNestedOneWithoutDocumentRulesInputSchema } from './TriggerCreateNestedOneWithoutDocumentRulesInputSchema';

export const DocumentTriggerCreateInputSchema: z.ZodType<Prisma.DocumentTriggerCreateInput> = z.object({
  id: z.string().cuid().optional(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutDocumentRulesInputSchema),
  trigger: z.lazy(() => TriggerCreateNestedOneWithoutDocumentRulesInputSchema)
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateInput>;

export default DocumentTriggerCreateInputSchema;
