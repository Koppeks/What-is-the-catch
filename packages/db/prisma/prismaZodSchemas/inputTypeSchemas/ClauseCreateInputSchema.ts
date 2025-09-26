import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreatetriggerWarningInputSchema } from './ClauseCreatetriggerWarningInputSchema';
import { SeveritySchema } from './SeveritySchema';
import { ClauseCreatecategoriesInputSchema } from './ClauseCreatecategoriesInputSchema';
import { AnalysisRequestCreateNestedOneWithoutClausesInputSchema } from './AnalysisRequestCreateNestedOneWithoutClausesInputSchema';
import { TriggerHitCreateNestedManyWithoutClauseInputSchema } from './TriggerHitCreateNestedManyWithoutClauseInputSchema';

export const ClauseCreateInputSchema: z.ZodType<Prisma.ClauseCreateInput> = z.object({
  id: z.string().cuid().optional(),
  order: z.number().int(),
  title: z.string(),
  content: z.string(),
  triggerWarning: z.union([ z.lazy(() => ClauseCreatetriggerWarningInputSchema),z.string().array() ]).optional(),
  severity: z.lazy(() => SeveritySchema),
  riskScore: z.number().int(),
  categories: z.union([ z.lazy(() => ClauseCreatecategoriesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  analysisRequest: z.lazy(() => AnalysisRequestCreateNestedOneWithoutClausesInputSchema),
  hits: z.lazy(() => TriggerHitCreateNestedManyWithoutClauseInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCreateInput>;

export default ClauseCreateInputSchema;
