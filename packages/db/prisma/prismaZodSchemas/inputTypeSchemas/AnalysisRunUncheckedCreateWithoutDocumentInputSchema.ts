import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { ClauseAnalysisUncheckedCreateNestedManyWithoutRunInputSchema } from './ClauseAnalysisUncheckedCreateNestedManyWithoutRunInputSchema';

export const AnalysisRunUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.AnalysisRunUncheckedCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  engineVersion: z.string(),
  startedAt: z.coerce.date().optional(),
  finishedAt: z.coerce.date(),
  overallRisk: z.number().int().optional(),
  notes: z.string(),
  clauseAnalyses: z.lazy(() => ClauseAnalysisUncheckedCreateNestedManyWithoutRunInputSchema).optional(),
});

export default AnalysisRunUncheckedCreateWithoutDocumentInputSchema;
