import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitWhereInputSchema } from '../inputTypeSchemas/TriggerHitWhereInputSchema'
import { TriggerHitOrderByWithRelationInputSchema } from '../inputTypeSchemas/TriggerHitOrderByWithRelationInputSchema'
import { TriggerHitWhereUniqueInputSchema } from '../inputTypeSchemas/TriggerHitWhereUniqueInputSchema'

export const TriggerHitAggregateArgsSchema: z.ZodType<Prisma.TriggerHitAggregateArgs> = z.object({
  where: TriggerHitWhereInputSchema.optional(), 
  orderBy: z.union([ TriggerHitOrderByWithRelationInputSchema.array(), TriggerHitOrderByWithRelationInputSchema ]).optional(),
  cursor: TriggerHitWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TriggerHitAggregateArgsSchema;
