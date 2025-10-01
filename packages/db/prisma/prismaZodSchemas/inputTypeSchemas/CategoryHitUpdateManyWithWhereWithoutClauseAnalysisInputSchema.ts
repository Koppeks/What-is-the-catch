import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitScalarWhereInputSchema } from './CategoryHitScalarWhereInputSchema';
import { CategoryHitUpdateManyMutationInputSchema } from './CategoryHitUpdateManyMutationInputSchema';
import { CategoryHitUncheckedUpdateManyWithoutClauseAnalysisInputSchema } from './CategoryHitUncheckedUpdateManyWithoutClauseAnalysisInputSchema';

export const CategoryHitUpdateManyWithWhereWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitUpdateManyWithWhereWithoutClauseAnalysisInput> = z.object({
  where: z.lazy(() => CategoryHitScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryHitUpdateManyMutationInputSchema),z.lazy(() => CategoryHitUncheckedUpdateManyWithoutClauseAnalysisInputSchema) ]),
}).strict() as z.ZodType<Prisma.CategoryHitUpdateManyWithWhereWithoutClauseAnalysisInput>;

export default CategoryHitUpdateManyWithWhereWithoutClauseAnalysisInputSchema;
