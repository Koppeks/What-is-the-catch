import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseArgsSchema } from "../outputTypeSchemas/ClauseArgsSchema"
import { TriggerArgsSchema } from "../outputTypeSchemas/TriggerArgsSchema"

export const TriggerHitIncludeSchema: z.ZodType<Prisma.TriggerHitInclude> = z.object({
  clause: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  trigger: z.union([z.boolean(),z.lazy(() => TriggerArgsSchema)]).optional(),
}).strict()

export default TriggerHitIncludeSchema;
