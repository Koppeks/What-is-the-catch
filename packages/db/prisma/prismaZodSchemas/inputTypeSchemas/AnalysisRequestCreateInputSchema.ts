import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { ClauseCreateNestedManyWithoutAnalysisRequestInputSchema } from './ClauseCreateNestedManyWithoutAnalysisRequestInputSchema';
import { TriggerCreateNestedManyWithoutAnalysisRequestInputSchema } from './TriggerCreateNestedManyWithoutAnalysisRequestInputSchema';

export const AnalysisRequestCreateInputSchema: z.ZodType<Prisma.AnalysisRequestCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => TypeRequestSchema),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  sourceUrl: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  clauses: z.lazy(() => ClauseCreateNestedManyWithoutAnalysisRequestInputSchema).optional(),
  triggers: z.lazy(() => TriggerCreateNestedManyWithoutAnalysisRequestInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestCreateInput>;

export default AnalysisRequestCreateInputSchema;
