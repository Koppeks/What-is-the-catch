import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitUpdateWithoutClauseAnalysisInputSchema } from './CategoryHitUpdateWithoutClauseAnalysisInputSchema';
import { CategoryHitUncheckedUpdateWithoutClauseAnalysisInputSchema } from './CategoryHitUncheckedUpdateWithoutClauseAnalysisInputSchema';

export const CategoryHitUpdateWithWhereUniqueWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitUpdateWithWhereUniqueWithoutClauseAnalysisInput> = z.object({
  where: z.lazy(() => CategoryHitWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryHitUpdateWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitUncheckedUpdateWithoutClauseAnalysisInputSchema) ]),
}).strict() as z.ZodType<Prisma.CategoryHitUpdateWithWhereUniqueWithoutClauseAnalysisInput>;

export default CategoryHitUpdateWithWhereUniqueWithoutClauseAnalysisInputSchema;
