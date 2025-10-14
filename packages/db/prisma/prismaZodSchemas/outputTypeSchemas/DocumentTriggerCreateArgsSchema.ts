import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerIncludeSchema } from '../inputTypeSchemas/DocumentTriggerIncludeSchema'
import { DocumentTriggerCreateInputSchema } from '../inputTypeSchemas/DocumentTriggerCreateInputSchema'
import { DocumentTriggerUncheckedCreateInputSchema } from '../inputTypeSchemas/DocumentTriggerUncheckedCreateInputSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { TriggerArgsSchema } from "../outputTypeSchemas/TriggerArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentTriggerSelectSchema: z.ZodType<Prisma.DocumentTriggerSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  triggerId: z.boolean().optional(),
  enabled: z.boolean().optional(),
  minConfidence: z.boolean().optional(),
  notes: z.boolean().optional(),
  from: z.boolean().optional(),
  to: z.boolean().optional(),
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  trigger: z.union([z.boolean(),z.lazy(() => TriggerArgsSchema)]).optional(),
}).strict()

export const DocumentTriggerCreateArgsSchema: z.ZodType<Prisma.DocumentTriggerCreateArgs> = z.object({
  select: DocumentTriggerSelectSchema.optional(),
  include: z.lazy(() => DocumentTriggerIncludeSchema).optional(),
  data: z.union([ DocumentTriggerCreateInputSchema, DocumentTriggerUncheckedCreateInputSchema ]),
}).strict();

export default DocumentTriggerCreateArgsSchema;
