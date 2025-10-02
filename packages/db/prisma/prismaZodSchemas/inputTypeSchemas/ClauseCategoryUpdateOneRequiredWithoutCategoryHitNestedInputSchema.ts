import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreateWithoutCategoryHitInputSchema } from './ClauseCategoryCreateWithoutCategoryHitInputSchema';
import { ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema } from './ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema';
import { ClauseCategoryCreateOrConnectWithoutCategoryHitInputSchema } from './ClauseCategoryCreateOrConnectWithoutCategoryHitInputSchema';
import { ClauseCategoryUpsertWithoutCategoryHitInputSchema } from './ClauseCategoryUpsertWithoutCategoryHitInputSchema';
import { ClauseCategoryWhereUniqueInputSchema } from './ClauseCategoryWhereUniqueInputSchema';
import { ClauseCategoryUpdateToOneWithWhereWithoutCategoryHitInputSchema } from './ClauseCategoryUpdateToOneWithWhereWithoutCategoryHitInputSchema';
import { ClauseCategoryUpdateWithoutCategoryHitInputSchema } from './ClauseCategoryUpdateWithoutCategoryHitInputSchema';
import { ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema } from './ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema';

export const ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInputSchema: z.ZodType<Prisma.ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseCategoryCreateWithoutCategoryHitInputSchema), z.lazy(() => ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCategoryCreateOrConnectWithoutCategoryHitInputSchema).optional(),
  upsert: z.lazy(() => ClauseCategoryUpsertWithoutCategoryHitInputSchema).optional(),
  connect: z.lazy(() => ClauseCategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseCategoryUpdateToOneWithWhereWithoutCategoryHitInputSchema), z.lazy(() => ClauseCategoryUpdateWithoutCategoryHitInputSchema), z.lazy(() => ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema) ]).optional(),
});

export default ClauseCategoryUpdateOneRequiredWithoutCategoryHitNestedInputSchema;
