import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestScalarWhereInputSchema } from './AnalysisRequestScalarWhereInputSchema';
import { AnalysisRequestUpdateManyMutationInputSchema } from './AnalysisRequestUpdateManyMutationInputSchema';
import { AnalysisRequestUncheckedUpdateManyWithoutTriggersInputSchema } from './AnalysisRequestUncheckedUpdateManyWithoutTriggersInputSchema';

export const AnalysisRequestUpdateManyWithWhereWithoutTriggersInputSchema: z.ZodType<Prisma.AnalysisRequestUpdateManyWithWhereWithoutTriggersInput> = z.object({
  where: z.lazy(() => AnalysisRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AnalysisRequestUpdateManyMutationInputSchema),z.lazy(() => AnalysisRequestUncheckedUpdateManyWithoutTriggersInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRequestUpdateManyWithWhereWithoutTriggersInput>;

export default AnalysisRequestUpdateManyWithWhereWithoutTriggersInputSchema;
