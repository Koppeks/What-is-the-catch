import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitWhereInputSchema } from '../inputTypeSchemas/TriggerHitWhereInputSchema'
import { TriggerHitOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TriggerHitOrderByWithAggregationInputSchema'
import { TriggerHitScalarFieldEnumSchema } from '../inputTypeSchemas/TriggerHitScalarFieldEnumSchema'
import { TriggerHitScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TriggerHitScalarWhereWithAggregatesInputSchema'

export const TriggerHitGroupByArgsSchema: z.ZodType<Prisma.TriggerHitGroupByArgs> = z.object({
  where: TriggerHitWhereInputSchema.optional(),
  orderBy: z.union([ TriggerHitOrderByWithAggregationInputSchema.array(),TriggerHitOrderByWithAggregationInputSchema ]).optional(),
  by: TriggerHitScalarFieldEnumSchema.array(),
  having: TriggerHitScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TriggerHitGroupByArgs>;

export default TriggerHitGroupByArgsSchema;
