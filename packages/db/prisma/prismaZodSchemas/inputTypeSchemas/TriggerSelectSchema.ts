import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerArgsSchema } from "../outputTypeSchemas/TriggerArgsSchema"
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { ClauseTypeArgsSchema } from "../outputTypeSchemas/ClauseTypeArgsSchema"
import { TriggerHitFindManyArgsSchema } from "../outputTypeSchemas/TriggerHitFindManyArgsSchema"
import { AnalysisRequestFindManyArgsSchema } from "../outputTypeSchemas/AnalysisRequestFindManyArgsSchema"
import { TriggerCountOutputTypeArgsSchema } from "../outputTypeSchemas/TriggerCountOutputTypeArgsSchema"

export const TriggerSelectSchema: z.ZodType<Prisma.TriggerSelect> = z.object({
  id: z.boolean().optional(),
  key: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
  patterns: z.boolean().optional(),
  source: z.boolean().optional(),
  state: z.boolean().optional(),
  mergedIntoId: z.boolean().optional(),
  reviewNotes: z.boolean().optional(),
  promotedAt: z.boolean().optional(),
  clauseTypeId: z.boolean().optional(),
  defaultSeverity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mergedInto: z.union([z.boolean(),z.lazy(() => TriggerArgsSchema)]).optional(),
  mergeFrom: z.union([z.boolean(),z.lazy(() => TriggerFindManyArgsSchema)]).optional(),
  clauseType: z.union([z.boolean(),z.lazy(() => ClauseTypeArgsSchema)]).optional(),
  hits: z.union([z.boolean(),z.lazy(() => TriggerHitFindManyArgsSchema)]).optional(),
  AnalysisRequest: z.union([z.boolean(),z.lazy(() => AnalysisRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TriggerCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TriggerSelectSchema;
