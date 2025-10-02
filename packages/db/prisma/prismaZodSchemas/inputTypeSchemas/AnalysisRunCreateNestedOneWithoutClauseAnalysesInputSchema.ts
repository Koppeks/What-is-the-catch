import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunCreateWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateWithoutClauseAnalysesInputSchema';
import { AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema } from './AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema';
import { AnalysisRunCreateOrConnectWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateOrConnectWithoutClauseAnalysesInputSchema';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';

export const AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema: z.ZodType<Prisma.AnalysisRunCreateNestedOneWithoutClauseAnalysesInput> = z.strictObject({
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutClauseAnalysesInputSchema), z.lazy(() => AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AnalysisRunCreateOrConnectWithoutClauseAnalysesInputSchema).optional(),
  connect: z.lazy(() => AnalysisRunWhereUniqueInputSchema).optional(),
});

export default AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema;
