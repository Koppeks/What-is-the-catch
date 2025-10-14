import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutDocumentRulesInputSchema } from './DocumentCreateNestedOneWithoutDocumentRulesInputSchema';
import { TriggerCreateNestedOneWithoutDocumentRulesInputSchema } from './TriggerCreateNestedOneWithoutDocumentRulesInputSchema';

export const DocumentTriggerCreateInputSchema: z.ZodType<Prisma.DocumentTriggerCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  from: z.number().int(),
  to: z.number().int(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutDocumentRulesInputSchema),
  trigger: z.lazy(() => TriggerCreateNestedOneWithoutDocumentRulesInputSchema),
});

export default DocumentTriggerCreateInputSchema;
