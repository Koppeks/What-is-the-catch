import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionIncludeSchema } from '../inputTypeSchemas/SectionIncludeSchema'
import { SectionWhereUniqueInputSchema } from '../inputTypeSchemas/SectionWhereUniqueInputSchema'
import { SectionCreateInputSchema } from '../inputTypeSchemas/SectionCreateInputSchema'
import { SectionUncheckedCreateInputSchema } from '../inputTypeSchemas/SectionUncheckedCreateInputSchema'
import { SectionUpdateInputSchema } from '../inputTypeSchemas/SectionUpdateInputSchema'
import { SectionUncheckedUpdateInputSchema } from '../inputTypeSchemas/SectionUncheckedUpdateInputSchema'
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
  blocks: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SectionUpsertArgsSchema: z.ZodType<Prisma.SectionUpsertArgs> = z.object({
  select: SectionSelectSchema.optional(),
  include: z.lazy(() => SectionIncludeSchema).optional(),
  where: SectionWhereUniqueInputSchema, 
  create: z.union([ SectionCreateInputSchema, SectionUncheckedCreateInputSchema ]),
  update: z.union([ SectionUpdateInputSchema, SectionUncheckedUpdateInputSchema ]),
}).strict();

export default SectionUpsertArgsSchema;
