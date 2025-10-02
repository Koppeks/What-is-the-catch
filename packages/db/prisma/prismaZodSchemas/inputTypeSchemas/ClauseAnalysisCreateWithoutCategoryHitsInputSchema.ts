import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { ClauseAnalysisCreatetriggerWarningsInputSchema } from './ClauseAnalysisCreatetriggerWarningsInputSchema';
import { AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema';
import { ClauseCreateNestedOneWithoutClauseAnalysisInputSchema } from './ClauseCreateNestedOneWithoutClauseAnalysisInputSchema';

export const ClauseAnalysisCreateWithoutCategoryHitsInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateWithoutCategoryHitsInput> = z.strictObject({
  id: z.cuid().optional(),
  severity: z.lazy(() => SeveritySchema).optional(),
  riskScore: z.number().int().optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisCreatetriggerWarningsInputSchema), z.string().array() ]).optional(),
  run: z.lazy(() => AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema),
  clause: z.lazy(() => ClauseCreateNestedOneWithoutClauseAnalysisInputSchema),
});

export default ClauseAnalysisCreateWithoutCategoryHitsInputSchema;
