import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreatetriggerWarningInputSchema } from './ClauseCreatetriggerWarningInputSchema';
import { SeveritySchema } from './SeveritySchema';
import { ClauseCreatecategoriesInputSchema } from './ClauseCreatecategoriesInputSchema';
import { TriggerHitCreateNestedManyWithoutClauseInputSchema } from './TriggerHitCreateNestedManyWithoutClauseInputSchema';

export const ClauseCreateWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.ClauseCreateWithoutAnalysisRequestInput> = z.object({
  id: z.string().cuid().optional(),
  order: z.number().int(),
  title: z.string(),
  content: z.string(),
  triggerWarning: z.union([ z.lazy(() => ClauseCreatetriggerWarningInputSchema),z.string().array() ]).optional(),
  severity: z.lazy(() => SeveritySchema),
  riskScore: z.number().int(),
  categories: z.union([ z.lazy(() => ClauseCreatecategoriesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  hits: z.lazy(() => TriggerHitCreateNestedManyWithoutClauseInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCreateWithoutAnalysisRequestInput>;

export default ClauseCreateWithoutAnalysisRequestInputSchema;
