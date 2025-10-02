import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreateWithoutCategoryHitInputSchema } from './ClauseCategoryCreateWithoutCategoryHitInputSchema';
import { ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema } from './ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema';
import { ClauseCategoryCreateOrConnectWithoutCategoryHitInputSchema } from './ClauseCategoryCreateOrConnectWithoutCategoryHitInputSchema';
import { ClauseCategoryWhereUniqueInputSchema } from './ClauseCategoryWhereUniqueInputSchema';

export const ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema: z.ZodType<Prisma.ClauseCategoryCreateNestedOneWithoutCategoryHitInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseCategoryCreateWithoutCategoryHitInputSchema), z.lazy(() => ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCategoryCreateOrConnectWithoutCategoryHitInputSchema).optional(),
  connect: z.lazy(() => ClauseCategoryWhereUniqueInputSchema).optional(),
});

export default ClauseCategoryCreateNestedOneWithoutCategoryHitInputSchema;
