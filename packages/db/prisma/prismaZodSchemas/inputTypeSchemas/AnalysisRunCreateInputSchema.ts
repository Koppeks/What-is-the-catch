import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { DocumentCreateNestedOneWithoutRunsInputSchema } from './DocumentCreateNestedOneWithoutRunsInputSchema';

export const AnalysisRunCreateInputSchema: z.ZodType<Prisma.AnalysisRunCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  engineVersion: z.string(),
  startedAt: z.coerce.date().optional(),
  finishedAt: z.coerce.date(),
  overallRisk: z.number().int().optional(),
  notes: z.string(),
  document: z.lazy(() => DocumentCreateNestedOneWithoutRunsInputSchema),
});

export default AnalysisRunCreateInputSchema;
