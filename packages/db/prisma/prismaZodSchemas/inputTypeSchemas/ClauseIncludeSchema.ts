import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
import { ClauseArgsSchema } from "../outputTypeSchemas/ClauseArgsSchema"
import { ClauseFindManyArgsSchema } from "../outputTypeSchemas/ClauseFindManyArgsSchema"
import { TriggerHitFindManyArgsSchema } from "../outputTypeSchemas/TriggerHitFindManyArgsSchema"
import { ClauseAnalysisFindManyArgsSchema } from "../outputTypeSchemas/ClauseAnalysisFindManyArgsSchema"
import { ClauseCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseCountOutputTypeArgsSchema"

export const ClauseIncludeSchema: z.ZodType<Prisma.ClauseInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
  parent: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  children: z.union([z.boolean(),z.lazy(() => ClauseFindManyArgsSchema)]).optional(),
  TriggerHits: z.union([z.boolean(),z.lazy(() => TriggerHitFindManyArgsSchema)]).optional(),
  ClauseAnalysis: z.union([z.boolean(),z.lazy(() => ClauseAnalysisFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ClauseIncludeSchema;
