import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateNestedOneWithoutDocumentRulesInputSchema } from './TriggerCreateNestedOneWithoutDocumentRulesInputSchema';

export const DocumentTriggerCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  from: z.number().int(),
  to: z.number().int(),
  trigger: z.lazy(() => TriggerCreateNestedOneWithoutDocumentRulesInputSchema),
});

export default DocumentTriggerCreateWithoutDocumentInputSchema;
