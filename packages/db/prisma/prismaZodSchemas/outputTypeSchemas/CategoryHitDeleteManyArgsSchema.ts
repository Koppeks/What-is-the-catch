import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitWhereInputSchema } from '../inputTypeSchemas/CategoryHitWhereInputSchema'

export const CategoryHitDeleteManyArgsSchema: z.ZodType<Prisma.CategoryHitDeleteManyArgs> = z.object({
  where: CategoryHitWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.CategoryHitDeleteManyArgs>;

export default CategoryHitDeleteManyArgsSchema;
