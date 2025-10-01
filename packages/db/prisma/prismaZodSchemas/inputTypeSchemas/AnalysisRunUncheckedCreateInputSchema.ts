import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { ClauseAnalysisUncheckedCreateNestedManyWithoutRunInputSchema } from './ClauseAnalysisUncheckedCreateNestedManyWithoutRunInputSchema';

export const AnalysisRunUncheckedCreateInputSchema: z.ZodType<Prisma.AnalysisRunUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  documentId: z.string(),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  engineVersion: z.string(),
  startedAt: z.coerce.date().optional(),
  finishedAt: z.coerce.date(),
  overallRisk: z.number().int().optional(),
  notes: z.string(),
  clauseAnalyses: z.lazy(() => ClauseAnalysisUncheckedCreateNestedManyWithoutRunInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRunUncheckedCreateInput>;

export default AnalysisRunUncheckedCreateInputSchema;
