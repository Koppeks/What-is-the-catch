import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitIncludeSchema } from '../inputTypeSchemas/TriggerHitIncludeSchema'
import { TriggerHitWhereUniqueInputSchema } from '../inputTypeSchemas/TriggerHitWhereUniqueInputSchema'
import { TriggerHitCreateInputSchema } from '../inputTypeSchemas/TriggerHitCreateInputSchema'
import { TriggerHitUncheckedCreateInputSchema } from '../inputTypeSchemas/TriggerHitUncheckedCreateInputSchema'
import { TriggerHitUpdateInputSchema } from '../inputTypeSchemas/TriggerHitUpdateInputSchema'
import { TriggerHitUncheckedUpdateInputSchema } from '../inputTypeSchemas/TriggerHitUncheckedUpdateInputSchema'
import { ClauseArgsSchema } from "../outputTypeSchemas/ClauseArgsSchema"
import { TriggerArgsSchema } from "../outputTypeSchemas/TriggerArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TriggerHitSelectSchema: z.ZodType<Prisma.TriggerHitSelect> = z.object({
  id: z.boolean().optional(),
  clauseId: z.boolean().optional(),
  triggerId: z.boolean().optional(),
  confidence: z.boolean().optional(),
  matches: z.boolean().optional(),
  clause: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  trigger: z.union([z.boolean(),z.lazy(() => TriggerArgsSchema)]).optional(),
}).strict()

export const TriggerHitUpsertArgsSchema: z.ZodType<Prisma.TriggerHitUpsertArgs> = z.object({
  select: TriggerHitSelectSchema.optional(),
  include: z.lazy(() => TriggerHitIncludeSchema).optional(),
  where: TriggerHitWhereUniqueInputSchema,
  create: z.union([ TriggerHitCreateInputSchema,TriggerHitUncheckedCreateInputSchema ]),
  update: z.union([ TriggerHitUpdateInputSchema,TriggerHitUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.TriggerHitUpsertArgs>;

export default TriggerHitUpsertArgsSchema;
