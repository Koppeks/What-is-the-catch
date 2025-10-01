import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunCreateWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateWithoutClauseAnalysesInputSchema';
import { AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema } from './AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema';
import { AnalysisRunCreateOrConnectWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateOrConnectWithoutClauseAnalysesInputSchema';
import { AnalysisRunUpsertWithoutClauseAnalysesInputSchema } from './AnalysisRunUpsertWithoutClauseAnalysesInputSchema';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';
import { AnalysisRunUpdateToOneWithWhereWithoutClauseAnalysesInputSchema } from './AnalysisRunUpdateToOneWithWhereWithoutClauseAnalysesInputSchema';
import { AnalysisRunUpdateWithoutClauseAnalysesInputSchema } from './AnalysisRunUpdateWithoutClauseAnalysesInputSchema';
import { AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema } from './AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema';

export const AnalysisRunUpdateOneRequiredWithoutClauseAnalysesNestedInputSchema: z.ZodType<Prisma.AnalysisRunUpdateOneRequiredWithoutClauseAnalysesNestedInput> = z.object({
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutClauseAnalysesInputSchema),z.lazy(() => AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AnalysisRunCreateOrConnectWithoutClauseAnalysesInputSchema).optional(),
  upsert: z.lazy(() => AnalysisRunUpsertWithoutClauseAnalysesInputSchema).optional(),
  connect: z.lazy(() => AnalysisRunWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AnalysisRunUpdateToOneWithWhereWithoutClauseAnalysesInputSchema),z.lazy(() => AnalysisRunUpdateWithoutClauseAnalysesInputSchema),z.lazy(() => AnalysisRunUncheckedUpdateWithoutClauseAnalysesInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRunUpdateOneRequiredWithoutClauseAnalysesNestedInput>;

export default AnalysisRunUpdateOneRequiredWithoutClauseAnalysesNestedInputSchema;
