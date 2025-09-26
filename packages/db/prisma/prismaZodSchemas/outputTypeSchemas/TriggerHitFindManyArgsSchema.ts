import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitIncludeSchema } from '../inputTypeSchemas/TriggerHitIncludeSchema'
import { TriggerHitWhereInputSchema } from '../inputTypeSchemas/TriggerHitWhereInputSchema'
import { TriggerHitOrderByWithRelationInputSchema } from '../inputTypeSchemas/TriggerHitOrderByWithRelationInputSchema'
import { TriggerHitWhereUniqueInputSchema } from '../inputTypeSchemas/TriggerHitWhereUniqueInputSchema'
import { TriggerHitScalarFieldEnumSchema } from '../inputTypeSchemas/TriggerHitScalarFieldEnumSchema'
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

export const TriggerHitFindManyArgsSchema: z.ZodType<Prisma.TriggerHitFindManyArgs> = z.object({
  select: TriggerHitSelectSchema.optional(),
  include: z.lazy(() => TriggerHitIncludeSchema).optional(),
  where: TriggerHitWhereInputSchema.optional(),
  orderBy: z.union([ TriggerHitOrderByWithRelationInputSchema.array(),TriggerHitOrderByWithRelationInputSchema ]).optional(),
  cursor: TriggerHitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TriggerHitScalarFieldEnumSchema,TriggerHitScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerHitFindManyArgs>;

export default TriggerHitFindManyArgsSchema;
