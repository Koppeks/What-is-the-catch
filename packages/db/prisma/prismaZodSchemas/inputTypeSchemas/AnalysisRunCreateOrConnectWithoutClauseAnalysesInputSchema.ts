import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';
import { AnalysisRunCreateWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateWithoutClauseAnalysesInputSchema';
import { AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema } from './AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema';

export const AnalysisRunCreateOrConnectWithoutClauseAnalysesInputSchema: z.ZodType<Prisma.AnalysisRunCreateOrConnectWithoutClauseAnalysesInput> = z.strictObject({
  where: z.lazy(() => AnalysisRunWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutClauseAnalysesInputSchema), z.lazy(() => AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema) ]),
});

export default AnalysisRunCreateOrConnectWithoutClauseAnalysesInputSchema;
