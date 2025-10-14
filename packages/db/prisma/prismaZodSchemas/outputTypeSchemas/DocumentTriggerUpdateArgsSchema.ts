import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerIncludeSchema } from '../inputTypeSchemas/DocumentTriggerIncludeSchema'
import { DocumentTriggerUpdateInputSchema } from '../inputTypeSchemas/DocumentTriggerUpdateInputSchema'
import { DocumentTriggerUncheckedUpdateInputSchema } from '../inputTypeSchemas/DocumentTriggerUncheckedUpdateInputSchema'
import { DocumentTriggerWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereUniqueInputSchema'
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

export const DocumentTriggerUpdateArgsSchema: z.ZodType<Prisma.DocumentTriggerUpdateArgs> = z.object({
  select: DocumentTriggerSelectSchema.optional(),
  include: z.lazy(() => DocumentTriggerIncludeSchema).optional(),
  data: z.union([ DocumentTriggerUpdateInputSchema, DocumentTriggerUncheckedUpdateInputSchema ]),
  where: DocumentTriggerWhereUniqueInputSchema, 
}).strict();

export default DocumentTriggerUpdateArgsSchema;
