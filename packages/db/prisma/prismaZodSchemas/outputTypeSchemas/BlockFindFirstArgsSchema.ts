import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlockIncludeSchema } from '../inputTypeSchemas/BlockIncludeSchema'
import { BlockWhereInputSchema } from '../inputTypeSchemas/BlockWhereInputSchema'
import { BlockOrderByWithRelationInputSchema } from '../inputTypeSchemas/BlockOrderByWithRelationInputSchema'
import { BlockWhereUniqueInputSchema } from '../inputTypeSchemas/BlockWhereUniqueInputSchema'
import { BlockScalarFieldEnumSchema } from '../inputTypeSchemas/BlockScalarFieldEnumSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { SectionArgsSchema } from "../outputTypeSchemas/SectionArgsSchema"
import { SectionFindManyArgsSchema } from "../outputTypeSchemas/SectionFindManyArgsSchema"
import { BlockCountOutputTypeArgsSchema } from "../outputTypeSchemas/BlockCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BlockSelectSchema: z.ZodType<Prisma.BlockSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  sectionId: z.boolean().optional(),
  order: z.boolean().optional(),
  kind: z.boolean().optional(),
  level: z.boolean().optional(),
  ordinalPath: z.boolean().optional(),
  title: z.boolean().optional(),
  text: z.boolean().optional(),
  html: z.boolean().optional(),
  anchor: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  section: z.union([z.boolean(),z.lazy(() => SectionArgsSchema)]).optional(),
  Section: z.union([z.boolean(),z.lazy(() => SectionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BlockCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BlockFindFirstArgsSchema: z.ZodType<Prisma.BlockFindFirstArgs> = z.object({
  select: BlockSelectSchema.optional(),
  include: z.lazy(() => BlockIncludeSchema).optional(),
  where: BlockWhereInputSchema.optional(), 
  orderBy: z.union([ BlockOrderByWithRelationInputSchema.array(), BlockOrderByWithRelationInputSchema ]).optional(),
  cursor: BlockWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BlockScalarFieldEnumSchema, BlockScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default BlockFindFirstArgsSchema;
