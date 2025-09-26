import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestCreateWithoutTriggersInputSchema } from './AnalysisRequestCreateWithoutTriggersInputSchema';
import { AnalysisRequestUncheckedCreateWithoutTriggersInputSchema } from './AnalysisRequestUncheckedCreateWithoutTriggersInputSchema';
import { AnalysisRequestCreateOrConnectWithoutTriggersInputSchema } from './AnalysisRequestCreateOrConnectWithoutTriggersInputSchema';
import { AnalysisRequestWhereUniqueInputSchema } from './AnalysisRequestWhereUniqueInputSchema';

export const AnalysisRequestCreateNestedManyWithoutTriggersInputSchema: z.ZodType<Prisma.AnalysisRequestCreateNestedManyWithoutTriggersInput> = z.object({
  create: z.union([ z.lazy(() => AnalysisRequestCreateWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestCreateWithoutTriggersInputSchema).array(),z.lazy(() => AnalysisRequestUncheckedCreateWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUncheckedCreateWithoutTriggersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AnalysisRequestCreateOrConnectWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestCreateOrConnectWithoutTriggersInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AnalysisRequestWhereUniqueInputSchema),z.lazy(() => AnalysisRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestCreateNestedManyWithoutTriggersInput>;

export default AnalysisRequestCreateNestedManyWithoutTriggersInputSchema;
