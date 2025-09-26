import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema } from './ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema';
import { TriggerUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema } from './TriggerUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema';

export const AnalysisRequestUncheckedCreateInputSchema: z.ZodType<Prisma.AnalysisRequestUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => TypeRequestSchema),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  sourceUrl: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  clauses: z.lazy(() => ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema).optional(),
  triggers: z.lazy(() => TriggerUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestUncheckedCreateInput>;

export default AnalysisRequestUncheckedCreateInputSchema;
