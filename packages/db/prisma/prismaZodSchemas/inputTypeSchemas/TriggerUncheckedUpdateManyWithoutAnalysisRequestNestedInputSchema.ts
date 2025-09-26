import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutAnalysisRequestInputSchema } from './TriggerCreateWithoutAnalysisRequestInputSchema';
import { TriggerUncheckedCreateWithoutAnalysisRequestInputSchema } from './TriggerUncheckedCreateWithoutAnalysisRequestInputSchema';
import { TriggerCreateOrConnectWithoutAnalysisRequestInputSchema } from './TriggerCreateOrConnectWithoutAnalysisRequestInputSchema';
import { TriggerUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema } from './TriggerUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema } from './TriggerUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema';
import { TriggerUpdateManyWithWhereWithoutAnalysisRequestInputSchema } from './TriggerUpdateManyWithWhereWithoutAnalysisRequestInputSchema';
import { TriggerScalarWhereInputSchema } from './TriggerScalarWhereInputSchema';

export const TriggerUncheckedUpdateManyWithoutAnalysisRequestNestedInputSchema: z.ZodType<Prisma.TriggerUncheckedUpdateManyWithoutAnalysisRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerCreateWithoutAnalysisRequestInputSchema).array(),z.lazy(() => TriggerUncheckedCreateWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutAnalysisRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerCreateOrConnectWithoutAnalysisRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TriggerUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TriggerUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUpdateWithWhereUniqueWithoutAnalysisRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TriggerUpdateManyWithWhereWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUpdateManyWithWhereWithoutAnalysisRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TriggerScalarWhereInputSchema),z.lazy(() => TriggerScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerUncheckedUpdateManyWithoutAnalysisRequestNestedInput>;

export default TriggerUncheckedUpdateManyWithoutAnalysisRequestNestedInputSchema;
