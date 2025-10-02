import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitCreateWithoutCategoryInputSchema } from './CategoryHitCreateWithoutCategoryInputSchema';
import { CategoryHitUncheckedCreateWithoutCategoryInputSchema } from './CategoryHitUncheckedCreateWithoutCategoryInputSchema';
import { CategoryHitCreateOrConnectWithoutCategoryInputSchema } from './CategoryHitCreateOrConnectWithoutCategoryInputSchema';
import { CategoryHitCreateManyCategoryInputEnvelopeSchema } from './CategoryHitCreateManyCategoryInputEnvelopeSchema';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';

export const CategoryHitUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.CategoryHitUncheckedCreateNestedManyWithoutCategoryInput> = z.strictObject({
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutCategoryInputSchema), z.lazy(() => CategoryHitCreateWithoutCategoryInputSchema).array(), z.lazy(() => CategoryHitUncheckedCreateWithoutCategoryInputSchema), z.lazy(() => CategoryHitUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryHitCreateOrConnectWithoutCategoryInputSchema), z.lazy(() => CategoryHitCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryHitCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema), z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
});

export default CategoryHitUncheckedCreateNestedManyWithoutCategoryInputSchema;
