import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitCreateWithoutClauseAnalysisInputSchema } from './CategoryHitCreateWithoutClauseAnalysisInputSchema';
import { CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema } from './CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema';
import { CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema } from './CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema';
import { CategoryHitCreateManyClauseAnalysisInputEnvelopeSchema } from './CategoryHitCreateManyClauseAnalysisInputEnvelopeSchema';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';

export const CategoryHitUncheckedCreateNestedManyWithoutClauseAnalysisInputSchema: z.ZodType<Prisma.CategoryHitUncheckedCreateNestedManyWithoutClauseAnalysisInput> = z.object({
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitCreateWithoutClauseAnalysisInputSchema).array(),z.lazy(() => CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryHitCreateManyClauseAnalysisInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.CategoryHitUncheckedCreateNestedManyWithoutClauseAnalysisInput>;

export default CategoryHitUncheckedCreateNestedManyWithoutClauseAnalysisInputSchema;
