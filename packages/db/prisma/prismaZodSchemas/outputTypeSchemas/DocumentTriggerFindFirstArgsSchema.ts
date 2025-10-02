import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerIncludeSchema } from '../inputTypeSchemas/DocumentTriggerIncludeSchema'
import { DocumentTriggerWhereInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereInputSchema'
import { DocumentTriggerOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentTriggerOrderByWithRelationInputSchema'
import { DocumentTriggerWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereUniqueInputSchema'
import { DocumentTriggerScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentTriggerScalarFieldEnumSchema'
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

export const DocumentTriggerFindFirstArgsSchema: z.ZodType<Prisma.DocumentTriggerFindFirstArgs> = z.object({
  select: DocumentTriggerSelectSchema.optional(),
  include: z.lazy(() => DocumentTriggerIncludeSchema).optional(),
  where: DocumentTriggerWhereInputSchema.optional(), 
  orderBy: z.union([ DocumentTriggerOrderByWithRelationInputSchema.array(), DocumentTriggerOrderByWithRelationInputSchema ]).optional(),
  cursor: DocumentTriggerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocumentTriggerScalarFieldEnumSchema, DocumentTriggerScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default DocumentTriggerFindFirstArgsSchema;
