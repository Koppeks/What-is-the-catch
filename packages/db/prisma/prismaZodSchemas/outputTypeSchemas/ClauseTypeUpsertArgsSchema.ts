import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeIncludeSchema } from '../inputTypeSchemas/ClauseTypeIncludeSchema'
import { ClauseTypeWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseTypeWhereUniqueInputSchema'
import { ClauseTypeCreateInputSchema } from '../inputTypeSchemas/ClauseTypeCreateInputSchema'
import { ClauseTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/ClauseTypeUncheckedCreateInputSchema'
import { ClauseTypeUpdateInputSchema } from '../inputTypeSchemas/ClauseTypeUpdateInputSchema'
import { ClauseTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/ClauseTypeUncheckedUpdateInputSchema'
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

export const ClauseTypeUpsertArgsSchema: z.ZodType<Prisma.ClauseTypeUpsertArgs> = z.object({
  select: ClauseTypeSelectSchema.optional(),
  include: z.lazy(() => ClauseTypeIncludeSchema).optional(),
  where: ClauseTypeWhereUniqueInputSchema,
  create: z.union([ ClauseTypeCreateInputSchema,ClauseTypeUncheckedCreateInputSchema ]),
  update: z.union([ ClauseTypeUpdateInputSchema,ClauseTypeUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ClauseTypeUpsertArgs>;

export default ClauseTypeUpsertArgsSchema;
