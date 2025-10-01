import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitCreateWithoutCategoryInputSchema } from './CategoryHitCreateWithoutCategoryInputSchema';
import { CategoryHitUncheckedCreateWithoutCategoryInputSchema } from './CategoryHitUncheckedCreateWithoutCategoryInputSchema';

export const CategoryHitCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => CategoryHitWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutCategoryInputSchema),z.lazy(() => CategoryHitUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict() as z.ZodType<Prisma.CategoryHitCreateOrConnectWithoutCategoryInput>;

export default CategoryHitCreateOrConnectWithoutCategoryInputSchema;
