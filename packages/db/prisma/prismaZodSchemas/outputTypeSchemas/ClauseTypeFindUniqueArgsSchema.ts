import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeIncludeSchema } from '../inputTypeSchemas/ClauseTypeIncludeSchema'
import { ClauseTypeWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseTypeWhereUniqueInputSchema'
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

export const ClauseTypeFindUniqueArgsSchema: z.ZodType<Prisma.ClauseTypeFindUniqueArgs> = z.object({
  select: ClauseTypeSelectSchema.optional(),
  include: z.lazy(() => ClauseTypeIncludeSchema).optional(),
  where: ClauseTypeWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClauseTypeFindUniqueArgs>;

export default ClauseTypeFindUniqueArgsSchema;
