import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { ClauseTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseTypeCountOutputTypeArgsSchema"

export const ClauseTypeSelectSchema: z.ZodType<Prisma.ClauseTypeSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  version: z.boolean().optional(),
  defaultScoring: z.boolean().optional(),
  label: z.boolean().optional(),
  isActive: z.boolean().optional(),
  triggerInstruction: z.boolean().optional(),
  triggerKeywords: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Trigger: z.union([z.boolean(),z.lazy(() => TriggerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ClauseTypeSelectSchema;
