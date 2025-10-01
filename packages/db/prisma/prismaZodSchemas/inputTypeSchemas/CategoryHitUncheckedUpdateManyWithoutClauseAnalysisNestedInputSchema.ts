import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitCreateWithoutClauseAnalysisInputSchema } from './CategoryHitCreateWithoutClauseAnalysisInputSchema';
import { CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema } from './CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema';
import { CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema } from './CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema';
import { CategoryHitUpsertWithWhereUniqueWithoutClauseAnalysisInputSchema } from './CategoryHitUpsertWithWhereUniqueWithoutClauseAnalysisInputSchema';
import { CategoryHitCreateManyClauseAnalysisInputEnvelopeSchema } from './CategoryHitCreateManyClauseAnalysisInputEnvelopeSchema';
import { CategoryHitWhereUniqueInputSchema } from './CategoryHitWhereUniqueInputSchema';
import { CategoryHitUpdateWithWhereUniqueWithoutClauseAnalysisInputSchema } from './CategoryHitUpdateWithWhereUniqueWithoutClauseAnalysisInputSchema';
import { CategoryHitUpdateManyWithWhereWithoutClauseAnalysisInputSchema } from './CategoryHitUpdateManyWithWhereWithoutClauseAnalysisInputSchema';
import { CategoryHitScalarWhereInputSchema } from './CategoryHitScalarWhereInputSchema';

export const CategoryHitUncheckedUpdateManyWithoutClauseAnalysisNestedInputSchema: z.ZodType<Prisma.CategoryHitUncheckedUpdateManyWithoutClauseAnalysisNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryHitCreateWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitCreateWithoutClauseAnalysisInputSchema).array(),z.lazy(() => CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitUncheckedCreateWithoutClauseAnalysisInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitCreateOrConnectWithoutClauseAnalysisInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryHitUpsertWithWhereUniqueWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitUpsertWithWhereUniqueWithoutClauseAnalysisInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryHitCreateManyClauseAnalysisInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryHitWhereUniqueInputSchema),z.lazy(() => CategoryHitWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryHitUpdateWithWhereUniqueWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitUpdateWithWhereUniqueWithoutClauseAnalysisInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryHitUpdateManyWithWhereWithoutClauseAnalysisInputSchema),z.lazy(() => CategoryHitUpdateManyWithWhereWithoutClauseAnalysisInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryHitScalarWhereInputSchema),z.lazy(() => CategoryHitScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.CategoryHitUncheckedUpdateManyWithoutClauseAnalysisNestedInput>;

export default CategoryHitUncheckedUpdateManyWithoutClauseAnalysisNestedInputSchema;
