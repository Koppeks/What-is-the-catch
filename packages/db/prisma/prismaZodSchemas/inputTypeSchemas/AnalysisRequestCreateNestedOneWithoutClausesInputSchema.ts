import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestCreateWithoutClausesInputSchema } from './AnalysisRequestCreateWithoutClausesInputSchema';
import { AnalysisRequestUncheckedCreateWithoutClausesInputSchema } from './AnalysisRequestUncheckedCreateWithoutClausesInputSchema';
import { AnalysisRequestCreateOrConnectWithoutClausesInputSchema } from './AnalysisRequestCreateOrConnectWithoutClausesInputSchema';
import { AnalysisRequestWhereUniqueInputSchema } from './AnalysisRequestWhereUniqueInputSchema';

export const AnalysisRequestCreateNestedOneWithoutClausesInputSchema: z.ZodType<Prisma.AnalysisRequestCreateNestedOneWithoutClausesInput> = z.object({
  create: z.union([ z.lazy(() => AnalysisRequestCreateWithoutClausesInputSchema),z.lazy(() => AnalysisRequestUncheckedCreateWithoutClausesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AnalysisRequestCreateOrConnectWithoutClausesInputSchema).optional(),
  connect: z.lazy(() => AnalysisRequestWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestCreateNestedOneWithoutClausesInput>;

export default AnalysisRequestCreateNestedOneWithoutClausesInputSchema;
