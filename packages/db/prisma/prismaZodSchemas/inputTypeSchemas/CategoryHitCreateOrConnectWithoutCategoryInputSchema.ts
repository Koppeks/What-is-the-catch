import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitCreateWithoutCategoryInputSchema } from './CategoryHitCreateWithoutCategoryInputSchema';
import { CategoryHitUncheckedCreateWithoutCategoryInputSchema } from './CategoryHitUncheckedCreateWithoutCategoryInputSchema';

export const CategoryHitCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitCreateOrConnectWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => CategoryHitWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutCategoryInputSchema), z.lazy(() => CategoryHitUncheckedCreateWithoutCategoryInputSchema) ]),
});

export default CategoryHitCreateOrConnectWithoutCategoryInputSchema;
