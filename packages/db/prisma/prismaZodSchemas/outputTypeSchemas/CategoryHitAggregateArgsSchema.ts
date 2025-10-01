import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitWhereInputSchema } from '../inputTypeSchemas/CategoryHitWhereInputSchema'
import { CategoryHitOrderByWithRelationInputSchema } from '../inputTypeSchemas/CategoryHitOrderByWithRelationInputSchema'
import { CategoryHitWhereUniqueInputSchema } from '../inputTypeSchemas/CategoryHitWhereUniqueInputSchema'

export const CategoryHitAggregateArgsSchema: z.ZodType<Prisma.CategoryHitAggregateArgs> = z.object({
  where: CategoryHitWhereInputSchema.optional(),
  orderBy: z.union([ CategoryHitOrderByWithRelationInputSchema.array(),CategoryHitOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryHitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.CategoryHitAggregateArgs>;

export default CategoryHitAggregateArgsSchema;
