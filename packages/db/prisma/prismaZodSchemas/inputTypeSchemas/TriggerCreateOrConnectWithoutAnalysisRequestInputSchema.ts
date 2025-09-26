import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutAnalysisRequestInputSchema } from './TriggerCreateWithoutAnalysisRequestInputSchema';
import { TriggerUncheckedCreateWithoutAnalysisRequestInputSchema } from './TriggerUncheckedCreateWithoutAnalysisRequestInputSchema';

export const TriggerCreateOrConnectWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutAnalysisRequestInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutAnalysisRequestInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerCreateOrConnectWithoutAnalysisRequestInput>;

export default TriggerCreateOrConnectWithoutAnalysisRequestInputSchema;
