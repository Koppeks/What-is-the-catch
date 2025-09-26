import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestCreateWithoutClausesInputSchema } from './AnalysisRequestCreateWithoutClausesInputSchema';
import { AnalysisRequestUncheckedCreateWithoutClausesInputSchema } from './AnalysisRequestUncheckedCreateWithoutClausesInputSchema';
import { AnalysisRequestCreateOrConnectWithoutClausesInputSchema } from './AnalysisRequestCreateOrConnectWithoutClausesInputSchema';
import { AnalysisRequestUpsertWithoutClausesInputSchema } from './AnalysisRequestUpsertWithoutClausesInputSchema';
import { AnalysisRequestWhereUniqueInputSchema } from './AnalysisRequestWhereUniqueInputSchema';
import { AnalysisRequestUpdateToOneWithWhereWithoutClausesInputSchema } from './AnalysisRequestUpdateToOneWithWhereWithoutClausesInputSchema';
import { AnalysisRequestUpdateWithoutClausesInputSchema } from './AnalysisRequestUpdateWithoutClausesInputSchema';
import { AnalysisRequestUncheckedUpdateWithoutClausesInputSchema } from './AnalysisRequestUncheckedUpdateWithoutClausesInputSchema';

export const AnalysisRequestUpdateOneRequiredWithoutClausesNestedInputSchema: z.ZodType<Prisma.AnalysisRequestUpdateOneRequiredWithoutClausesNestedInput> = z.object({
  create: z.union([ z.lazy(() => AnalysisRequestCreateWithoutClausesInputSchema),z.lazy(() => AnalysisRequestUncheckedCreateWithoutClausesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AnalysisRequestCreateOrConnectWithoutClausesInputSchema).optional(),
  upsert: z.lazy(() => AnalysisRequestUpsertWithoutClausesInputSchema).optional(),
  connect: z.lazy(() => AnalysisRequestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AnalysisRequestUpdateToOneWithWhereWithoutClausesInputSchema),z.lazy(() => AnalysisRequestUpdateWithoutClausesInputSchema),z.lazy(() => AnalysisRequestUncheckedUpdateWithoutClausesInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestUpdateOneRequiredWithoutClausesNestedInput>;

export default AnalysisRequestUpdateOneRequiredWithoutClausesNestedInputSchema;
