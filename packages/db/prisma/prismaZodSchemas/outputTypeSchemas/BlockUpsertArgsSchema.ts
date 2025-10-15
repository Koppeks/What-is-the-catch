import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlockIncludeSchema } from '../inputTypeSchemas/BlockIncludeSchema'
import { BlockWhereUniqueInputSchema } from '../inputTypeSchemas/BlockWhereUniqueInputSchema'
import { BlockCreateInputSchema } from '../inputTypeSchemas/BlockCreateInputSchema'
import { BlockUncheckedCreateInputSchema } from '../inputTypeSchemas/BlockUncheckedCreateInputSchema'
import { BlockUpdateInputSchema } from '../inputTypeSchemas/BlockUpdateInputSchema'
import { BlockUncheckedUpdateInputSchema } from '../inputTypeSchemas/BlockUncheckedUpdateInputSchema'
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

export const BlockUpsertArgsSchema: z.ZodType<Prisma.BlockUpsertArgs> = z.object({
  select: BlockSelectSchema.optional(),
  include: z.lazy(() => BlockIncludeSchema).optional(),
  where: BlockWhereUniqueInputSchema, 
  create: z.union([ BlockCreateInputSchema, BlockUncheckedCreateInputSchema ]),
  update: z.union([ BlockUpdateInputSchema, BlockUncheckedUpdateInputSchema ]),
}).strict();

export default BlockUpsertArgsSchema;
