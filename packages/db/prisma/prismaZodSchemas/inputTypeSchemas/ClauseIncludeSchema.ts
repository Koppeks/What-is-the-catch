import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestArgsSchema } from "../outputTypeSchemas/AnalysisRequestArgsSchema"
import { TriggerHitFindManyArgsSchema } from "../outputTypeSchemas/TriggerHitFindManyArgsSchema"
import { ClauseCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseCountOutputTypeArgsSchema"

export const ClauseIncludeSchema: z.ZodType<Prisma.ClauseInclude> = z.object({
  analysisRequest: z.union([z.boolean(),z.lazy(() => AnalysisRequestArgsSchema)]).optional(),
  hits: z.union([z.boolean(),z.lazy(() => TriggerHitFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ClauseIncludeSchema;
