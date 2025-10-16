import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlockIncludeSchema } from '../inputTypeSchemas/BlockIncludeSchema'
import { BlockCreateInputSchema } from '../inputTypeSchemas/BlockCreateInputSchema'
import { BlockUncheckedCreateInputSchema } from '../inputTypeSchemas/BlockUncheckedCreateInputSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { SectionArgsSchema } from "../outputTypeSchemas/SectionArgsSchema"
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
}).strict()

export const BlockCreateArgsSchema: z.ZodType<Prisma.BlockCreateArgs> = z.object({
  select: BlockSelectSchema.optional(),
  include: z.lazy(() => BlockIncludeSchema).optional(),
  data: z.union([ BlockCreateInputSchema, BlockUncheckedCreateInputSchema ]),
}).strict();

export default BlockCreateArgsSchema;
