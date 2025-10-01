import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';

export const AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema: z.ZodType<Prisma.AnalysisRunUncheckedCreateWithoutClauseAnalysesInput> = z.object({
  id: z.string().cuid().optional(),
  documentId: z.string(),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  engineVersion: z.string(),
  startedAt: z.coerce.date().optional(),
  finishedAt: z.coerce.date(),
  overallRisk: z.number().int().optional(),
  notes: z.string()
}).strict() as z.ZodType<Prisma.AnalysisRunUncheckedCreateWithoutClauseAnalysesInput>;

export default AnalysisRunUncheckedCreateWithoutClauseAnalysesInputSchema;
