import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateNestedOneWithoutDocumentRulesInputSchema } from './TriggerCreateNestedOneWithoutDocumentRulesInputSchema';

export const DocumentTriggerCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  enabled: z.boolean().optional(),
  minConfidence: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  trigger: z.lazy(() => TriggerCreateNestedOneWithoutDocumentRulesInputSchema)
}).strict() as z.ZodType<Prisma.DocumentTriggerCreateWithoutDocumentInput>;

export default DocumentTriggerCreateWithoutDocumentInputSchema;
