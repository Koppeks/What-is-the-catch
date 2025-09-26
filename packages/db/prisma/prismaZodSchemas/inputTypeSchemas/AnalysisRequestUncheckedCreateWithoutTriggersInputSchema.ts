import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema } from './ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema';

export const AnalysisRequestUncheckedCreateWithoutTriggersInputSchema: z.ZodType<Prisma.AnalysisRequestUncheckedCreateWithoutTriggersInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => TypeRequestSchema),
  status: z.lazy(() => AnalysisStatusSchema).optional(),
  sourceUrl: z.string().optional().nullable(),
  language: z.string().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  clauses: z.lazy(() => ClauseUncheckedCreateNestedManyWithoutAnalysisRequestInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestUncheckedCreateWithoutTriggersInput>;

export default AnalysisRequestUncheckedCreateWithoutTriggersInputSchema;
