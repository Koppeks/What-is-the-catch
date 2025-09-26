import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestArgsSchema } from "../outputTypeSchemas/AnalysisRequestArgsSchema"
import { TriggerHitFindManyArgsSchema } from "../outputTypeSchemas/TriggerHitFindManyArgsSchema"
import { ClauseCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseCountOutputTypeArgsSchema"

export const ClauseSelectSchema: z.ZodType<Prisma.ClauseSelect> = z.object({
  id: z.boolean().optional(),
  analysisRequestId: z.boolean().optional(),
  order: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  triggerWarning: z.boolean().optional(),
  severity: z.boolean().optional(),
  riskScore: z.boolean().optional(),
  categories: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  analysisRequest: z.union([z.boolean(),z.lazy(() => AnalysisRequestArgsSchema)]).optional(),
  hits: z.union([z.boolean(),z.lazy(() => TriggerHitFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ClauseSelectSchema;
