import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereInputSchema } from './AnalysisRunWhereInputSchema';
import { AnalysisRunUpdateWithoutClauseAnalysesInputSchema } from './AnalysisRunUpdateWithoutClauseAnalysesInputSchema';
import { AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema } from './AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema';

export const AnalysisRunUpdateToOneWithWhereWithoutClauseAnalysesInputSchema: z.ZodType<Prisma.AnalysisRunUpdateToOneWithWhereWithoutClauseAnalysesInput> = z.object({
  where: z.lazy(() => AnalysisRunWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AnalysisRunUpdateWithoutClauseAnalysesInputSchema),z.lazy(() => AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRunUpdateToOneWithWhereWithoutClauseAnalysesInput>;

export default AnalysisRunUpdateToOneWithWhereWithoutClauseAnalysesInputSchema;
