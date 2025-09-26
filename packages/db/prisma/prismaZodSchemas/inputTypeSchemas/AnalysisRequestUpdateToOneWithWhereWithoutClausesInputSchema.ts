import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestWhereInputSchema } from './AnalysisRequestWhereInputSchema';
import { AnalysisRequestUpdateWithoutClausesInputSchema } from './AnalysisRequestUpdateWithoutClausesInputSchema';
import { AnalysisRequestUncheckedUpdateWithoutClausesInputSchema } from './AnalysisRequestUncheckedUpdateWithoutClausesInputSchema';

export const AnalysisRequestUpdateToOneWithWhereWithoutClausesInputSchema: z.ZodType<Prisma.AnalysisRequestUpdateToOneWithWhereWithoutClausesInput> = z.object({
  where: z.lazy(() => AnalysisRequestWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AnalysisRequestUpdateWithoutClausesInputSchema),z.lazy(() => AnalysisRequestUncheckedUpdateWithoutClausesInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRequestUpdateToOneWithWhereWithoutClausesInput>;

export default AnalysisRequestUpdateToOneWithWhereWithoutClausesInputSchema;
