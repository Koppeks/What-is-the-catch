import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryHitCreateManyInputSchema } from '../inputTypeSchemas/CategoryHitCreateManyInputSchema'

export const CategoryHitCreateManyArgsSchema: z.ZodType<Prisma.CategoryHitCreateManyArgs> = z.object({
  data: z.union([ CategoryHitCreateManyInputSchema, CategoryHitCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CategoryHitCreateManyArgsSchema;
