import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestWhereUniqueInputSchema } from './AnalysisRequestWhereUniqueInputSchema';
import { AnalysisRequestUpdateWithoutTriggersInputSchema } from './AnalysisRequestUpdateWithoutTriggersInputSchema';
import { AnalysisRequestUncheckedUpdateWithoutTriggersInputSchema } from './AnalysisRequestUncheckedUpdateWithoutTriggersInputSchema';
import { AnalysisRequestCreateWithoutTriggersInputSchema } from './AnalysisRequestCreateWithoutTriggersInputSchema';
import { AnalysisRequestUncheckedCreateWithoutTriggersInputSchema } from './AnalysisRequestUncheckedCreateWithoutTriggersInputSchema';

export const AnalysisRequestUpsertWithWhereUniqueWithoutTriggersInputSchema: z.ZodType<Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutTriggersInput> = z.object({
  where: z.lazy(() => AnalysisRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AnalysisRequestUpdateWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUncheckedUpdateWithoutTriggersInputSchema) ]),
  create: z.union([ z.lazy(() => AnalysisRequestCreateWithoutTriggersInputSchema),z.lazy(() => AnalysisRequestUncheckedCreateWithoutTriggersInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRequestUpsertWithWhereUniqueWithoutTriggersInput>;

export default AnalysisRequestUpsertWithWhereUniqueWithoutTriggersInputSchema;
