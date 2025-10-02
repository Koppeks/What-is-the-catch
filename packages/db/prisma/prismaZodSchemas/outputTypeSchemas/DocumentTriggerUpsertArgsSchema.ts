import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerIncludeSchema } from '../inputTypeSchemas/DocumentTriggerIncludeSchema'
import { DocumentTriggerWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereUniqueInputSchema'
import { DocumentTriggerCreateInputSchema } from '../inputTypeSchemas/DocumentTriggerCreateInputSchema'
import { DocumentTriggerUncheckedCreateInputSchema } from '../inputTypeSchemas/DocumentTriggerUncheckedCreateInputSchema'
import { DocumentTriggerUpdateInputSchema } from '../inputTypeSchemas/DocumentTriggerUpdateInputSchema'
import { DocumentTriggerUncheckedUpdateInputSchema } from '../inputTypeSchemas/DocumentTriggerUncheckedUpdateInputSchema'
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
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  trigger: z.union([z.boolean(),z.lazy(() => TriggerArgsSchema)]).optional(),
}).strict()

export const DocumentTriggerUpsertArgsSchema: z.ZodType<Prisma.DocumentTriggerUpsertArgs> = z.object({
  select: DocumentTriggerSelectSchema.optional(),
  include: z.lazy(() => DocumentTriggerIncludeSchema).optional(),
  where: DocumentTriggerWhereUniqueInputSchema, 
  create: z.union([ DocumentTriggerCreateInputSchema, DocumentTriggerUncheckedCreateInputSchema ]),
  update: z.union([ DocumentTriggerUpdateInputSchema, DocumentTriggerUncheckedUpdateInputSchema ]),
}).strict();

export default DocumentTriggerUpsertArgsSchema;
