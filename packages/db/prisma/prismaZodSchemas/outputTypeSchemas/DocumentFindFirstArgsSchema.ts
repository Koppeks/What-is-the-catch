import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentIncludeSchema } from '../inputTypeSchemas/DocumentIncludeSchema'
import { DocumentWhereInputSchema } from '../inputTypeSchemas/DocumentWhereInputSchema'
import { DocumentOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentOrderByWithRelationInputSchema'
import { DocumentWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentWhereUniqueInputSchema'
import { DocumentScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentScalarFieldEnumSchema'
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { AnalysisRunFindManyArgsSchema } from "../outputTypeSchemas/AnalysisRunFindManyArgsSchema"
import { DocumentTriggerFindManyArgsSchema } from "../outputTypeSchemas/DocumentTriggerFindManyArgsSchema"
import { DocumentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentSelectSchema: z.ZodType<Prisma.DocumentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  locale: z.boolean().optional(),
  kind: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  sourceUrl: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  blocks: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  runs: z.union([z.boolean(),z.lazy(() => AnalysisRunFindManyArgsSchema)]).optional(),
  documentRules: z.union([z.boolean(),z.lazy(() => DocumentTriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DocumentFindFirstArgsSchema: z.ZodType<Prisma.DocumentFindFirstArgs> = z.object({
  select: DocumentSelectSchema.optional(),
  include: z.lazy(() => DocumentIncludeSchema).optional(),
  where: DocumentWhereInputSchema.optional(), 
  orderBy: z.union([ DocumentOrderByWithRelationInputSchema.array(), DocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: DocumentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocumentScalarFieldEnumSchema, DocumentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default DocumentFindFirstArgsSchema;
