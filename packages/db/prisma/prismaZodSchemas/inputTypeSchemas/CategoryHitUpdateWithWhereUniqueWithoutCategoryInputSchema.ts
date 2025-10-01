import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitUpdateWithoutCategoryInputSchema } from './CategoryHitUpdateWithoutCategoryInputSchema';
import { CategoryHitUncheckedUpdateWithoutCategoryInputSchema } from './CategoryHitUncheckedUpdateWithoutCategoryInputSchema';

export const CategoryHitUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => CategoryHitWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryHitUpdateWithoutCategoryInputSchema),z.lazy(() => CategoryHitUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict() as z.ZodType<Prisma.CategoryHitUpdateWithWhereUniqueWithoutCategoryInput>;

export default CategoryHitUpdateWithWhereUniqueWithoutCategoryInputSchema;
