import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';
import { ClauseCategoryUpdateWithoutCategoryHitInputSchema } from './ClauseCategoryUpdateWithoutCategoryHitInputSchema';
import { ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema } from './ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema';

export const ClauseCategoryUpdateToOneWithWhereWithoutCategoryHitInputSchema: z.ZodType<Prisma.ClauseCategoryUpdateToOneWithWhereWithoutCategoryHitInput> = z.object({
  where: z.lazy(() => ClauseCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClauseCategoryUpdateWithoutCategoryHitInputSchema),z.lazy(() => ClauseCategoryUncheckedUpdateWithoutCategoryHitInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseCategoryUpdateToOneWithWhereWithoutCategoryHitInput>;

export default ClauseCategoryUpdateToOneWithWhereWithoutCategoryHitInputSchema;
