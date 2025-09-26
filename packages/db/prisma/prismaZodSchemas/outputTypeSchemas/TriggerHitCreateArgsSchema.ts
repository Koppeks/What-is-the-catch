import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitIncludeSchema } from '../inputTypeSchemas/TriggerHitIncludeSchema'
import { TriggerHitCreateInputSchema } from '../inputTypeSchemas/TriggerHitCreateInputSchema'
import { TriggerHitUncheckedCreateInputSchema } from '../inputTypeSchemas/TriggerHitUncheckedCreateInputSchema'
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

export const TriggerHitCreateArgsSchema: z.ZodType<Prisma.TriggerHitCreateArgs> = z.object({
  select: TriggerHitSelectSchema.optional(),
  include: z.lazy(() => TriggerHitIncludeSchema).optional(),
  data: z.union([ TriggerHitCreateInputSchema,TriggerHitUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.TriggerHitCreateArgs>;

export default TriggerHitCreateArgsSchema;
