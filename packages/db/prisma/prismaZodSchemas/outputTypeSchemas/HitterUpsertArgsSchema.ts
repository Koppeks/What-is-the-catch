import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HitterIncludeSchema } from '../inputTypeSchemas/HitterIncludeSchema'
import { HitterWhereUniqueInputSchema } from '../inputTypeSchemas/HitterWhereUniqueInputSchema'
import { HitterCreateInputSchema } from '../inputTypeSchemas/HitterCreateInputSchema'
import { HitterUncheckedCreateInputSchema } from '../inputTypeSchemas/HitterUncheckedCreateInputSchema'
import { HitterUpdateInputSchema } from '../inputTypeSchemas/HitterUpdateInputSchema'
import { HitterUncheckedUpdateInputSchema } from '../inputTypeSchemas/HitterUncheckedUpdateInputSchema'
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { HitterCountOutputTypeArgsSchema } from "../outputTypeSchemas/HitterCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HitterSelectSchema: z.ZodType<Prisma.HitterSelect> = z.object({
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
  _count: z.union([z.boolean(),z.lazy(() => HitterCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HitterUpsertArgsSchema: z.ZodType<Prisma.HitterUpsertArgs> = z.object({
  select: HitterSelectSchema.optional(),
  include: z.lazy(() => HitterIncludeSchema).optional(),
  where: HitterWhereUniqueInputSchema, 
  create: z.union([ HitterCreateInputSchema, HitterUncheckedCreateInputSchema ]),
  update: z.union([ HitterUpdateInputSchema, HitterUncheckedUpdateInputSchema ]),
}).strict();

export default HitterUpsertArgsSchema;
