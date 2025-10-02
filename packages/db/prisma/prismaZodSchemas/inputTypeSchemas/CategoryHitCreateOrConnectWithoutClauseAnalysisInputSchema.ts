import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitCreateWithoutClauseAnalysisInputSchema } from './CategoryHitCreateWithoutClauseAnalysisInputSchema';
import { CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema } from './CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema';

export const CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitCreateOrConnectWithoutClauseAnalysisInput> = z.strictObject({
  where: z.lazy(() => CategoryHitWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutClauseAnalysisInputSchema), z.lazy(() => CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema) ]),
});

export default CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema;
