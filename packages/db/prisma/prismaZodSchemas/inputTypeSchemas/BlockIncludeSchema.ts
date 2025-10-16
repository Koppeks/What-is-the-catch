import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { SectionArgsSchema } from "../outputTypeSchemas/SectionArgsSchema"

export const BlockIncludeSchema: z.ZodType<Prisma.BlockInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  section: z.union([z.boolean(),z.lazy(() => SectionArgsSchema)]).optional(),
}).strict();

export default BlockIncludeSchema;
