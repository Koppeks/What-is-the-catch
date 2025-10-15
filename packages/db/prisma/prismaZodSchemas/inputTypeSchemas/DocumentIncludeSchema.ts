import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { AnalysisRunFindManyArgsSchema } from "../outputTypeSchemas/AnalysisRunFindManyArgsSchema"
import { DocumentTriggerFindManyArgsSchema } from "../outputTypeSchemas/DocumentTriggerFindManyArgsSchema"
import { DocumentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentCountOutputTypeArgsSchema"

export const DocumentIncludeSchema: z.ZodType<Prisma.DocumentInclude> = z.object({
  blocks: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  runs: z.union([z.boolean(),z.lazy(() => AnalysisRunFindManyArgsSchema)]).optional(),
  documentRules: z.union([z.boolean(),z.lazy(() => DocumentTriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default DocumentIncludeSchema;
