import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { SectionArgsSchema } from "../outputTypeSchemas/SectionArgsSchema"
import { SectionFindManyArgsSchema } from "../outputTypeSchemas/SectionFindManyArgsSchema"
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { SectionCountOutputTypeArgsSchema } from "../outputTypeSchemas/SectionCountOutputTypeArgsSchema"

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

export default SectionSelectSchema;
