import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionIncludeSchema } from '../inputTypeSchemas/SectionIncludeSchema'
import { SectionWhereUniqueInputSchema } from '../inputTypeSchemas/SectionWhereUniqueInputSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { BlockArgsSchema } from "../outputTypeSchemas/BlockArgsSchema"
import { SectionArgsSchema } from "../outputTypeSchemas/SectionArgsSchema"
import { SectionFindManyArgsSchema } from "../outputTypeSchemas/SectionFindManyArgsSchema"
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { SectionCountOutputTypeArgsSchema } from "../outputTypeSchemas/SectionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SectionSelectSchema: z.ZodType<Prisma.SectionSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  headingBlockId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  headingBlock: z.union([z.boolean(),z.lazy(() => BlockArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => SectionArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => SectionFindManyArgsSchema)]).optional(),
  Block: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SectionFindUniqueArgsSchema: z.ZodType<Prisma.SectionFindUniqueArgs> = z.object({
  select: SectionSelectSchema.optional(),
  include: z.lazy(() => SectionIncludeSchema).optional(),
  where: SectionWhereUniqueInputSchema, 
}).strict();

export default SectionFindUniqueArgsSchema;
