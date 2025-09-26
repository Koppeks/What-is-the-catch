import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestUpdateWithoutClausesInputSchema } from './AnalysisRequestUpdateWithoutClausesInputSchema';
import { AnalysisRequestUncheckedUpdateWithoutClausesInputSchema } from './AnalysisRequestUncheckedUpdateWithoutClausesInputSchema';
import { AnalysisRequestCreateWithoutClausesInputSchema } from './AnalysisRequestCreateWithoutClausesInputSchema';
import { AnalysisRequestUncheckedCreateWithoutClausesInputSchema } from './AnalysisRequestUncheckedCreateWithoutClausesInputSchema';
import { AnalysisRequestWhereInputSchema } from './AnalysisRequestWhereInputSchema';

export const AnalysisRequestUpsertWithoutClausesInputSchema: z.ZodType<Prisma.AnalysisRequestUpsertWithoutClausesInput> = z.object({
  update: z.union([ z.lazy(() => AnalysisRequestUpdateWithoutClausesInputSchema),z.lazy(() => AnalysisRequestUncheckedUpdateWithoutClausesInputSchema) ]),
  create: z.union([ z.lazy(() => AnalysisRequestCreateWithoutClausesInputSchema),z.lazy(() => AnalysisRequestUncheckedCreateWithoutClausesInputSchema) ]),
  where: z.lazy(() => AnalysisRequestWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestUpsertWithoutClausesInput>;

export default AnalysisRequestUpsertWithoutClausesInputSchema;
