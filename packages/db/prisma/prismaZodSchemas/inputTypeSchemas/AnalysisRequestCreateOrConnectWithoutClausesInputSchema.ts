import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestWhereUniqueInputSchema } from './AnalysisRequestWhereUniqueInputSchema';
import { AnalysisRequestCreateWithoutClausesInputSchema } from './AnalysisRequestCreateWithoutClausesInputSchema';
import { AnalysisRequestUncheckedCreateWithoutClausesInputSchema } from './AnalysisRequestUncheckedCreateWithoutClausesInputSchema';

export const AnalysisRequestCreateOrConnectWithoutClausesInputSchema: z.ZodType<Prisma.AnalysisRequestCreateOrConnectWithoutClausesInput> = z.object({
  where: z.lazy(() => AnalysisRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AnalysisRequestCreateWithoutClausesInputSchema),z.lazy(() => AnalysisRequestUncheckedCreateWithoutClausesInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRequestCreateOrConnectWithoutClausesInput>;

export default AnalysisRequestCreateOrConnectWithoutClausesInputSchema;
