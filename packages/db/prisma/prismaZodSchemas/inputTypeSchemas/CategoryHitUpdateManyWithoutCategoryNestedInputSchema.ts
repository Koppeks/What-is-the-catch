import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitCreateWithoutCategoryInputSchema } from './CategoryHitCreateWithoutCategoryInputSchema';
import { CategoryHitUncheckedCreateWithoutCategoryInputSchema } from './CategoryHitUncheckedCreateWithoutCategoryInputSchema';
import { CategoryHitCreateOrConnectWithoutCategoryInputSchema } from './CategoryHitCreateOrConnectWithoutCategoryInputSchema';
import { CategoryHitUpsertWithWhereUniqueWithoutCategoryInputSchema } from './CategoryHitUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { CategoryHitCreateManyCategoryInputEnvelopeSchema } from './CategoryHitCreateManyCategoryInputEnvelopeSchema';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitUpdateWithWhereUniqueWithoutCategoryInputSchema } from './CategoryHitUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { CategoryHitUpdateManyWithWhereWithoutCategoryInputSchema } from './CategoryHitUpdateManyWithWhereWithoutCategoryInputSchema';
import { CategoryHitScalarWhereInputSchema } from './CategoryHitScalarWhereInputSchema';

export const CategoryHitUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.CategoryHitUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutCategoryInputSchema),z.lazy(() => CategoryHitCreateWithoutCategoryInputSchema).array(),z.lazy(() => CategoryHitUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => CategoryHitUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryHitCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => CategoryHitCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryHitUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => CategoryHitUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryHitCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryHitUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => CategoryHitUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryHitUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => CategoryHitUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryHitScalarWhereInputSchema),z.lazy(() => CategoryHitScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.CategoryHitUpdateManyWithoutCategoryNestedInput>;

export default CategoryHitUpdateManyWithoutCategoryNestedInputSchema;
