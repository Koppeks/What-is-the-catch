import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitScalarWhereInputSchema } from './CategoryHitScalarWhereInputSchema';
import { CategoryHitUpdateManyMutationInputSchema } from './CategoryHitUpdateManyMutationInputSchema';
import { CategoryHitUncheckedUpdateManyWithoutCategoryInputSchema } from './CategoryHitUncheckedUpdateManyWithoutCategoryInputSchema';

export const CategoryHitUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUpdateManyWithWhereWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => CategoryHitScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryHitUpdateManyMutationInputSchema), z.lazy(() => CategoryHitUncheckedUpdateManyWithoutCategoryInputSchema) ]),
});

export default CategoryHitUpdateManyWithWhereWithoutCategoryInputSchema;
