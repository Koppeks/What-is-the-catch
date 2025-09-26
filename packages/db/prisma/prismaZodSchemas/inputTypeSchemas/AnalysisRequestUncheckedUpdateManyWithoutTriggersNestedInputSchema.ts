import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestCreateWithoutTriggersInputSchema } from './AnalysisRequestCreateWithoutTriggersInputSchema';
import { AnalysisRequestUncheckedCreateWithoutTriggersInputSchema } from './AnalysisRequestUncheckedCreateWithoutTriggersInputSchema';
import { AnalysisRequestCreateOrConnectWithoutTriggersInputSchema } from './AnalysisRequestCreateOrConnectWithoutTriggersInputSchema';
import { AnalysisRequestUpsertWithWhereUniqueWithoutTriggersInputSchema } from './AnalysisRequestUpsertWithWhereUniqueWithoutTriggersInputSchema';
import { AnalysisRequestWhereUniqueInputSchema } from './AnalysisRequestWhereUniqueInputSchema';
import { AnalysisRequestUpdateWithWhereUniqueWithoutTriggersInputSchema } from './AnalysisRequestUpdateWithWhereUniqueWithoutTriggersInputSchema';
import { AnalysisRequestUpdateManyWithWhereWithoutTriggersInputSchema } from './AnalysisRequestUpdateManyWithWhereWithoutTriggersInputSchema';
import { AnalysisRequestScalarWhereInputSchema } from './AnalysisRequestScalarWhereInputSchema';

export const AnalysisRequestUncheckedUpdateManyWithoutTriggersNestedInputSchema: z.ZodType<Prisma.AnalysisRequestUncheckedUpdateManyWithoutTriggersNestedInput> = z.object({
  create: z.union([ z.lazy(() => AnalysisRequestCreateWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestCreateWithoutTriggersInputSchema).array(),z.lazy(() => AnalysisRequestUncheckedCreateWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUncheckedCreateWithoutTriggersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AnalysisRequestCreateOrConnectWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestCreateOrConnectWithoutTriggersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AnalysisRequestUpsertWithWhereUniqueWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUpsertWithWhereUniqueWithoutTriggersInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => AnalysisRequestWhereUniqueInputSchema),z.lazy(() => AnalysisRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AnalysisRequestWhereUniqueInputSchema),z.lazy(() => AnalysisRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AnalysisRequestWhereUniqueInputSchema),z.lazy(() => AnalysisRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AnalysisRequestWhereUniqueInputSchema),z.lazy(() => AnalysisRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AnalysisRequestUpdateWithWhereUniqueWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUpdateWithWhereUniqueWithoutTriggersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AnalysisRequestUpdateManyWithWhereWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUpdateManyWithWhereWithoutTriggersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AnalysisRequestScalarWhereInputSchema),z.lazy(() => AnalysisRequestScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestUncheckedUpdateManyWithoutTriggersNestedInput>;

export default AnalysisRequestUncheckedUpdateManyWithoutTriggersNestedInputSchema;
