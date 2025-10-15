import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentIncludeSchema } from '../inputTypeSchemas/DocumentIncludeSchema'
import { DocumentCreateInputSchema } from '../inputTypeSchemas/DocumentCreateInputSchema'
import { DocumentUncheckedCreateInputSchema } from '../inputTypeSchemas/DocumentUncheckedCreateInputSchema'
import { AnalysisRunFindManyArgsSchema } from "../outputTypeSchemas/AnalysisRunFindManyArgsSchema"
import { DocumentTriggerFindManyArgsSchema } from "../outputTypeSchemas/DocumentTriggerFindManyArgsSchema"
import { SectionFindManyArgsSchema } from "../outputTypeSchemas/SectionFindManyArgsSchema"
import { BlockFindManyArgsSchema } from "../outputTypeSchemas/BlockFindManyArgsSchema"
import { DocumentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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
  Section: z.union([z.boolean(),z.lazy(() => SectionFindManyArgsSchema)]).optional(),
  Block: z.union([z.boolean(),z.lazy(() => BlockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DocumentCreateArgsSchema: z.ZodType<Prisma.DocumentCreateArgs> = z.object({
  select: DocumentSelectSchema.optional(),
  include: z.lazy(() => DocumentIncludeSchema).optional(),
  data: z.union([ DocumentCreateInputSchema, DocumentUncheckedCreateInputSchema ]),
}).strict();

export default DocumentCreateArgsSchema;
