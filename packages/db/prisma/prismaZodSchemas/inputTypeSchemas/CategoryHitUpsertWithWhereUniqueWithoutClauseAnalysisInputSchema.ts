import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitUpdateWithoutClauseAnalysisInputSchema } from './CategoryHitUpdateWithoutClauseAnalysisInputSchema';
import { CategoryHitUncheckedUpdateWithoutClauseAnalysisInputSchema } from './CategoryHitUncheckedUpdateWithoutClauseAnalysisInputSchema';
import { CategoryHitCreateWithoutClauseAnalysisInputSchema } from './CategoryHitCreateWithoutClauseAnalysisInputSchema';
import { CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema } from './CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema';

export const CategoryHitUpsertWithWhereUniqueWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitUpsertWithWhereUniqueWithoutClauseAnalysisInput> = z.strictObject({
  where: z.lazy(() => CategoryHitWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryHitUpdateWithoutClauseAnalysisInputSchema), z.lazy(() => CategoryHitUncheckedUpdateWithoutClauseAnalysisInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutClauseAnalysisInputSchema), z.lazy(() => CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema) ]),
});

export default CategoryHitUpsertWithWhereUniqueWithoutClauseAnalysisInputSchema;
