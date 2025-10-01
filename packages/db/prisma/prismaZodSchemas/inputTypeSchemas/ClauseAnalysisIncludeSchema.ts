import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunArgsSchema } from "../outputTypeSchemas/AnalysisRunArgsSchema"
import { ClauseArgsSchema } from "../outputTypeSchemas/ClauseArgsSchema"
import { CategoryHitFindManyArgsSchema } from "../outputTypeSchemas/CategoryHitFindManyArgsSchema"
import { ClauseAnalysisCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseAnalysisCountOutputTypeArgsSchema"

export const ClauseAnalysisIncludeSchema: z.ZodType<Prisma.ClauseAnalysisInclude> = z.object({
  run: z.union([z.boolean(),z.lazy(() => AnalysisRunArgsSchema)]).optional(),
  clause: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  categoryHits: z.union([z.boolean(),z.lazy(() => CategoryHitFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseAnalysisCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ClauseAnalysisIncludeSchema;
