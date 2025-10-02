import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitUpdateWithoutCategoryInputSchema } from './CategoryHitUpdateWithoutCategoryInputSchema';
import { CategoryHitUncheckedUpdateWithoutCategoryInputSchema } from './CategoryHitUncheckedUpdateWithoutCategoryInputSchema';

export const CategoryHitUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUpdateWithWhereUniqueWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => CategoryHitWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryHitUpdateWithoutCategoryInputSchema), z.lazy(() => CategoryHitUncheckedUpdateWithoutCategoryInputSchema) ]),
});

export default CategoryHitUpdateWithWhereUniqueWithoutCategoryInputSchema;
