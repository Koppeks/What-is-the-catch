import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseCategoryIncludeSchema } from '../inputTypeSchemas/ClauseCategoryIncludeSchema'
import { ClauseCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseCategoryWhereUniqueInputSchema'
import { ClauseCategoryCreateInputSchema } from '../inputTypeSchemas/ClauseCategoryCreateInputSchema'
import { ClauseCategoryUncheckedCreateInputSchema } from '../inputTypeSchemas/ClauseCategoryUncheckedCreateInputSchema'
import { ClauseCategoryUpdateInputSchema } from '../inputTypeSchemas/ClauseCategoryUpdateInputSchema'
import { ClauseCategoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/ClauseCategoryUncheckedUpdateInputSchema'
import { TriggerFindManyArgsSchema } from "../outputTypeSchemas/TriggerFindManyArgsSchema"
import { ClauseCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClauseCategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClauseCategorySelectSchema: z.ZodType<Prisma.ClauseCategorySelect> = z.object({
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
  _count: z.union([z.boolean(),z.lazy(() => ClauseCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClauseCategoryUpsertArgsSchema: z.ZodType<Prisma.ClauseCategoryUpsertArgs> = z.object({
  select: ClauseCategorySelectSchema.optional(),
  include: z.lazy(() => ClauseCategoryIncludeSchema).optional(),
  where: ClauseCategoryWhereUniqueInputSchema, 
  create: z.union([ ClauseCategoryCreateInputSchema, ClauseCategoryUncheckedCreateInputSchema ]),
  update: z.union([ ClauseCategoryUpdateInputSchema, ClauseCategoryUncheckedUpdateInputSchema ]),
}).strict();

export default ClauseCategoryUpsertArgsSchema;
