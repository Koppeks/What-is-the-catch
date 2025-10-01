import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryWhereUniqueInputSchema } from './ClauseCategoryWhereUniqueInputSchema';
import { ClauseCategoryCreateWithoutCategoryHitInputSchema } from './ClauseCategoryCreateWithoutCategoryHitInputSchema';
import { ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema } from './ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema';

export const ClauseCategoryCreateOrConnectWithoutCategoryHitInputSchema: z.ZodType<Prisma.ClauseCategoryCreateOrConnectWithoutCategoryHitInput> = z.object({
  where: z.lazy(() => ClauseCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCategoryCreateWithoutCategoryHitInputSchema),z.lazy(() => ClauseCategoryUncheckedCreateWithoutCategoryHitInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseCategoryCreateOrConnectWithoutCategoryHitInput>;

export default ClauseCategoryCreateOrConnectWithoutCategoryHitInputSchema;
