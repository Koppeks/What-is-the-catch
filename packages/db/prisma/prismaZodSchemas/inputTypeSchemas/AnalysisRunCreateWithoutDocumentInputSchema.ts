import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { ClauseAnalysisCreateNestedManyWithoutRunInputSchema } from './ClauseAnalysisCreateNestedManyWithoutRunInputSchema';

export const AnalysisRunCreateWithoutDocumentInputSchema: z.ZodType<Prisma.AnalysisRunCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  engineVersion: z.string(),
  startedAt: z.coerce.date().optional(),
  finishedAt: z.coerce.date(),
  overallRisk: z.number().int().optional(),
  notes: z.string(),
  clauseAnalyses: z.lazy(() => ClauseAnalysisCreateNestedManyWithoutRunInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRunCreateWithoutDocumentInput>;

export default AnalysisRunCreateWithoutDocumentInputSchema;
