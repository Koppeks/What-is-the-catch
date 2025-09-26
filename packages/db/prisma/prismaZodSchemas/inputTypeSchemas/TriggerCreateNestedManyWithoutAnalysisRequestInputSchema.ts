import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutAnalysisRequestInputSchema } from './TriggerCreateWithoutAnalysisRequestInputSchema';
import { TriggerUncheckedCreateWithoutAnalysisRequestInputSchema } from './TriggerUncheckedCreateWithoutAnalysisRequestInputSchema';
import { TriggerCreateOrConnectWithoutAnalysisRequestInputSchema } from './TriggerCreateOrConnectWithoutAnalysisRequestInputSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';

export const TriggerCreateNestedManyWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.TriggerCreateNestedManyWithoutAnalysisRequestInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerCreateWithoutAnalysisRequestInputSchema).array(),z.lazy(() => TriggerUncheckedCreateWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutAnalysisRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerCreateOrConnectWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerCreateOrConnectWithoutAnalysisRequestInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TriggerWhereUniqueInputSchema),z.lazy(() => TriggerWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerCreateNestedManyWithoutAnalysisRequestInput>;

export default TriggerCreateNestedManyWithoutAnalysisRequestInputSchema;
