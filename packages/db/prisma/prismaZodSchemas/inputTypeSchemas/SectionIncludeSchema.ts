import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { SectionArgsSchema } from "../outputTypeSchemas/SectionArgsSchema"
import { SectionFindManyArgsSchema } from "../outputTypeSchemas/SectionFindManyArgsSchema"
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { SectionCountOutputTypeArgsSchema } from "../outputTypeSchemas/SectionCountOutputTypeArgsSchema"

export const SectionIncludeSchema: z.ZodType<Prisma.SectionInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => SectionArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => SectionFindManyArgsSchema)]).optional(),
  Block: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SectionCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default SectionIncludeSchema;
