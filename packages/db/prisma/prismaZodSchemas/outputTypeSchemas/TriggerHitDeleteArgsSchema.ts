import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitIncludeSchema } from '../inputTypeSchemas/TriggerHitIncludeSchema'
import { TriggerHitWhereUniqueInputSchema } from '../inputTypeSchemas/TriggerHitWhereUniqueInputSchema'
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

export const TriggerHitDeleteArgsSchema: z.ZodType<Prisma.TriggerHitDeleteArgs> = z.object({
  select: TriggerHitSelectSchema.optional(),
  include: z.lazy(() => TriggerHitIncludeSchema).optional(),
  where: TriggerHitWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TriggerHitDeleteArgs>;

export default TriggerHitDeleteArgsSchema;
