import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeIncludeSchema } from '../inputTypeSchemas/ClauseTypeIncludeSchema'
import { ClauseTypeCreateInputSchema } from '../inputTypeSchemas/ClauseTypeCreateInputSchema'
import { ClauseTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/ClauseTypeUncheckedCreateInputSchema'
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { ClauseTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseTypeCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const ClauseTypeCreateArgsSchema: z.ZodType<Prisma.ClauseTypeCreateArgs> = z.object({
  select: ClauseTypeSelectSchema.optional(),
  include: z.lazy(() => ClauseTypeIncludeSchema).optional(),
  data: z.union([ ClauseTypeCreateInputSchema,ClauseTypeUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ClauseTypeCreateArgs>;

export default ClauseTypeCreateArgsSchema;
