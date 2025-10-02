import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerWhereInputSchema } from '../inputTypeSchemas/TriggerWhereInputSchema'
import { TriggerOrderByWithRelationInputSchema } from '../inputTypeSchemas/TriggerOrderByWithRelationInputSchema'
import { TriggerWhereUniqueInputSchema } from '../inputTypeSchemas/TriggerWhereUniqueInputSchema'

export const TriggerAggregateArgsSchema: z.ZodType<Prisma.TriggerAggregateArgs> = z.object({
  where: TriggerWhereInputSchema.optional(), 
  orderBy: z.union([ TriggerOrderByWithRelationInputSchema.array(), TriggerOrderByWithRelationInputSchema ]).optional(),
  cursor: TriggerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TriggerAggregateArgsSchema;
