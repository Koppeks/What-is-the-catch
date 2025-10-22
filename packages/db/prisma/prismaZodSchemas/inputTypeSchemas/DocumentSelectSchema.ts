import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunFindManyArgsSchema } from "../outputTypeSchemas/AnalysisRunFindManyArgsSchema"
import { DocumentTriggerFindManyArgsSchema } from "../outputTypeSchemas/DocumentTriggerFindManyArgsSchema"
import { SectionFindManyArgsSchema } from "../outputTypeSchemas/SectionFindManyArgsSchema"
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { DocumentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentCountOutputTypeArgsSchema"

export const DocumentSelectSchema: z.ZodType<Prisma.DocumentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  locale: z.boolean().optional(),
  kind: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  sourceUrl: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  runs: z.union([z.boolean(),z.lazy(() => AnalysisRunFindManyArgsSchema)]).optional(),
  documentRules: z.union([z.boolean(),z.lazy(() => DocumentTriggerFindManyArgsSchema)]).optional(),
  section: z.union([z.boolean(),z.lazy(() => SectionFindManyArgsSchema)]).optional(),
  blocks: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DocumentSelectSchema;
