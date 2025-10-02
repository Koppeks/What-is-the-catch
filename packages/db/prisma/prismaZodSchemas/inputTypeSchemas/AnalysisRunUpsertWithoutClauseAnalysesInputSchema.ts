import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunUpdateWithoutClauseAnalysesInputSchema } from './AnalysisRunUpdateWithoutClauseAnalysesInputSchema';
import { AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema } from './AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema';
import { AnalysisRunCreateWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateWithoutClauseAnalysesInputSchema';
import { AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema } from './AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema';
import { AnalysisRunWhereInputSchema } from './AnalysisRunWhereInputSchema';

export const AnalysisRunUpsertWithoutClauseAnalysesInputSchema: z.ZodType<Prisma.AnalysisRunUpsertWithoutClauseAnalysesInput> = z.strictObject({
  update: z.union([ z.lazy(() => AnalysisRunUpdateWithoutClauseAnalysesInputSchema), z.lazy(() => AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema) ]),
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutClauseAnalysesInputSchema), z.lazy(() => AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema) ]),
  where: z.lazy(() => AnalysisRunWhereInputSchema).optional(),
});

export default AnalysisRunUpsertWithoutClauseAnalysesInputSchema;
