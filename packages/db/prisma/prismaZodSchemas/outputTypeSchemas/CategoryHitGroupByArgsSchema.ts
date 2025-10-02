import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitWhereInputSchema } from '../inputTypeSchemas/CategoryHitWhereInputSchema'
import { CategoryHitOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CategoryHitOrderByWithAggregationInputSchema'
import { CategoryHitScalarFieldEnumSchema } from '../inputTypeSchemas/CategoryHitScalarFieldEnumSchema'
import { CategoryHitScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CategoryHitScalarWhereWithAggregatesInputSchema'

export const CategoryHitGroupByArgsSchema: z.ZodType<Prisma.CategoryHitGroupByArgs> = z.object({
  where: CategoryHitWhereInputSchema.optional(), 
  orderBy: z.union([ CategoryHitOrderByWithAggregationInputSchema.array(), CategoryHitOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryHitScalarFieldEnumSchema.array(), 
  having: CategoryHitScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CategoryHitGroupByArgsSchema;
