import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { ClauseTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseTypeCountOutputTypeArgsSchema"

export const ClauseTypeIncludeSchema: z.ZodType<Prisma.ClauseTypeInclude> = z.object({
  Trigger: z.union([z.boolean(),z.lazy(() => TriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ClauseTypeIncludeSchema;
