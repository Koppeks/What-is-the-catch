import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryUpdateWithoutCategoryHitInputSchema } from './ClauseCategoryUpdateWithoutCategoryHitInputSchema';
import { ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema } from './ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema';
import { ClauseCategoryCreateWithoutCategoryHitInputSchema } from './ClauseCategoryCreateWithoutCategoryHitInputSchema';
import { ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema } from './ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';

export const ClauseCategoryUpsertWithoutCategoryHitInputSchema: z.ZodType<Prisma.ClauseCategoryUpsertWithoutCategoryHitInput> = z.strictObject({
  update: z.union([ z.lazy(() => ClauseCategoryUpdateWithoutCategoryHitInputSchema), z.lazy(() => ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCategoryCreateWithoutCategoryHitInputSchema), z.lazy(() => ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema) ]),
  where: z.lazy(() => ClauseCategoryWhereInputSchema).optional(),
});

export default ClauseCategoryUpsertWithoutCategoryHitInputSchema;
