import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionIncludeSchema } from '../inputTypeSchemas/SectionIncludeSchema'
import { SectionWhereInputSchema } from '../inputTypeSchemas/SectionWhereInputSchema'
import { SectionOrderByWithRelationInputSchema } from '../inputTypeSchemas/SectionOrderByWithRelationInputSchema'
import { SectionWhereUniqueInputSchema } from '../inputTypeSchemas/SectionWhereUniqueInputSchema'
import { SectionScalarFieldEnumSchema } from '../inputTypeSchemas/SectionScalarFieldEnumSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { SectionArgsSchema } from "../outputTypeSchemas/SectionArgsSchema"
import { SectionFindManyArgsSchema } from "../outputTypeSchemas/SectionFindManyArgsSchema"
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { SectionCountOutputTypeArgsSchema } from "../outputTypeSchemas/SectionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SectionSelectSchema: z.ZodType<Prisma.SectionSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  level: z.boolean().optional(),
  title: z.boolean().optional(),
  ordinalPath: z.boolean().optional(),
  headingText: z.boolean().optional(),
  headingHtml: z.boolean().optional(),
  headingAnchor: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => SectionArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => SectionFindManyArgsSchema)]).optional(),
  Block: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SectionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SectionFindFirstOrThrowArgs> = z.object({
  select: SectionSelectSchema.optional(),
  include: z.lazy(() => SectionIncludeSchema).optional(),
  where: SectionWhereInputSchema.optional(), 
  orderBy: z.union([ SectionOrderByWithRelationInputSchema.array(), SectionOrderByWithRelationInputSchema ]).optional(),
  cursor: SectionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SectionScalarFieldEnumSchema, SectionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default SectionFindFirstOrThrowArgsSchema;
