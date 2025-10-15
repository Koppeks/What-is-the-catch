import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { SectionArgsSchema } from "../outputTypeSchemas/SectionArgsSchema"
import { SectionFindManyArgsSchema } from "../outputTypeSchemas/SectionFindManyArgsSchema"
import { BlockCountOutputTypeArgsSchema } from "../outputTypeSchemas/BlockCountOutputTypeArgsSchema"

export const BlockIncludeSchema: z.ZodType<Prisma.BlockInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  section: z.union([z.boolean(),z.lazy(() => SectionArgsSchema)]).optional(),
  Section: z.union([z.boolean(),z.lazy(() => SectionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BlockCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default BlockIncludeSchema;
