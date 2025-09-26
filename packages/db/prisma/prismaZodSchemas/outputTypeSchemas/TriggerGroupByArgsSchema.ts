import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerWhereInputSchema } from '../inputTypeSchemas/TriggerWhereInputSchema'
import { TriggerOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TriggerOrderByWithAggregationInputSchema'
import { TriggerScalarFieldEnumSchema } from '../inputTypeSchemas/TriggerScalarFieldEnumSchema'
import { TriggerScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TriggerScalarWhereWithAggregatesInputSchema'

export const TriggerGroupByArgsSchema: z.ZodType<Prisma.TriggerGroupByArgs> = z.object({
  where: TriggerWhereInputSchema.optional(),
  orderBy: z.union([ TriggerOrderByWithAggregationInputSchema.array(),TriggerOrderByWithAggregationInputSchema ]).optional(),
  by: TriggerScalarFieldEnumSchema.array(),
  having: TriggerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TriggerGroupByArgs>;

export default TriggerGroupByArgsSchema;
