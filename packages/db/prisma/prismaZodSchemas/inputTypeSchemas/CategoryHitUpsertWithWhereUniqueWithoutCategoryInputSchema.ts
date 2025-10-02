import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitUpdateWithoutCategoryInputSchema } from './CategoryHitUpdateWithoutCategoryInputSchema';
import { CategoryHitUncheckedUpdateWithoutCategoryInputSchema } from './CategoryHitUncheckedUpdateWithoutCategoryInputSchema';
import { CategoryHitCreateWithoutCategoryInputSchema } from './CategoryHitCreateWithoutCategoryInputSchema';
import { CategoryHitUncheckedCreateWithoutCategoryInputSchema } from './CategoryHitUncheckedCreateWithoutCategoryInputSchema';

export const CategoryHitUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUpsertWithWhereUniqueWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => CategoryHitWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryHitUpdateWithoutCategoryInputSchema), z.lazy(() => CategoryHitUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutCategoryInputSchema), z.lazy(() => CategoryHitUncheckedCreateWithoutCategoryInputSchema) ]),
});

export default CategoryHitUpsertWithWhereUniqueWithoutCategoryInputSchema;
