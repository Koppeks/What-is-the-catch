import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitUpdateManyMutationInputSchema } from '../inputTypeSchemas/CategoryHitUpdateManyMutationInputSchema'
import { CategoryHitUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CategoryHitUncheckedUpdateManyInputSchema'
import { CategoryHitWhereInputSchema } from '../inputTypeSchemas/CategoryHitWhereInputSchema'

export const CategoryHitUpdateManyArgsSchema: z.ZodType<Prisma.CategoryHitUpdateManyArgs> = z.object({
  data: z.union([ CategoryHitUpdateManyMutationInputSchema, CategoryHitUncheckedUpdateManyInputSchema ]),
  where: CategoryHitWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CategoryHitUpdateManyArgsSchema;
