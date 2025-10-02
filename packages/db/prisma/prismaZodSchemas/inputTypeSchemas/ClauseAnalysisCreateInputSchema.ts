import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { ClauseAnalysisCreatetriggerWarningsInputSchema } from './ClauseAnalysisCreatetriggerWarningsInputSchema';
import { AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema';
import { ClauseCreateNestedOneWithoutClauseAnalysisInputSchema } from './ClauseCreateNestedOneWithoutClauseAnalysisInputSchema';
import { CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema } from './CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema';

export const ClauseAnalysisCreateInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  severity: z.lazy(() => SeveritySchema).optional(),
  riskScore: z.number().int().optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisCreatetriggerWarningsInputSchema), z.string().array() ]).optional(),
  run: z.lazy(() => AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema),
  clause: z.lazy(() => ClauseCreateNestedOneWithoutClauseAnalysisInputSchema),
  categoryHits: z.lazy(() => CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema).optional(),
});

export default ClauseAnalysisCreateInputSchema;
