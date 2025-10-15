import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { BlockArgsSchema } from "../outputTypeSchemas/BlockArgsSchema"
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { BlockCountOutputTypeArgsSchema } from "../outputTypeSchemas/BlockCountOutputTypeArgsSchema"

export const BlockIncludeSchema: z.ZodType<Prisma.BlockInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => BlockArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BlockCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default BlockIncludeSchema;
