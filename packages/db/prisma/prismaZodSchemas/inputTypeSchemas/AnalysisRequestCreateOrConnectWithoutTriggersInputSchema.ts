import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestWhereUniqueInputSchema } from './AnalysisRequestWhereUniqueInputSchema';
import { AnalysisRequestCreateWithoutTriggersInputSchema } from './AnalysisRequestCreateWithoutTriggersInputSchema';
import { AnalysisRequestUncheckedCreateWithoutTriggersInputSchema } from './AnalysisRequestUncheckedCreateWithoutTriggersInputSchema';

export const AnalysisRequestCreateOrConnectWithoutTriggersInputSchema: z.ZodType<Prisma.AnalysisRequestCreateOrConnectWithoutTriggersInput> = z.object({
  where: z.lazy(() => AnalysisRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AnalysisRequestCreateWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUncheckedCreateWithoutTriggersInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRequestCreateOrConnectWithoutTriggersInput>;

export default AnalysisRequestCreateOrConnectWithoutTriggersInputSchema;
