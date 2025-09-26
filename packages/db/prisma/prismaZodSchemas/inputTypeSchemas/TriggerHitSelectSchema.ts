import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseArgsSchema } from "../outputTypeSchemas/ClauseArgsSchema"
import { TriggerArgsSchema } from "../outputTypeSchemas/TriggerArgsSchema"

export const TriggerHitSelectSchema: z.ZodType<Prisma.TriggerHitSelect> = z.object({
  id: z.boolean().optional(),
  clauseId: z.boolean().optional(),
  triggerId: z.boolean().optional(),
  confidence: z.boolean().optional(),
  matches: z.boolean().optional(),
  clause: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  trigger: z.union([z.boolean(),z.lazy(() => TriggerArgsSchema)]).optional(),
}).strict()

export default TriggerHitSelectSchema;
