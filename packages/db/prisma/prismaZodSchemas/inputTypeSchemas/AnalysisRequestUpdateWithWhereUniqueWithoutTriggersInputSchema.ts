import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestWhereUniqueInputSchema } from './AnalysisRequestWhereUniqueInputSchema';
import { AnalysisRequestUpdateWithoutTriggersInputSchema } from './AnalysisRequestUpdateWithoutTriggersInputSchema';
import { AnalysisRequestUncheckedUpdateWithoutTriggersInputSchema } from './AnalysisRequestUncheckedUpdateWithoutTriggersInputSchema';

export const AnalysisRequestUpdateWithWhereUniqueWithoutTriggersInputSchema: z.ZodType<Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutTriggersInput> = z.object({
  where: z.lazy(() => AnalysisRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AnalysisRequestUpdateWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUncheckedUpdateWithoutTriggersInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRequestUpdateWithWhereUniqueWithoutTriggersInput>;

export default AnalysisRequestUpdateWithWhereUniqueWithoutTriggersInputSchema;
