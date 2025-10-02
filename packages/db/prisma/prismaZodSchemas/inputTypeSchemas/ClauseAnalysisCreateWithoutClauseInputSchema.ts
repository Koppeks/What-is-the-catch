import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';
import { ClauseAnalysisCreatetriggerWarningsInputSchema } from './ClauseAnalysisCreatetriggerWarningsInputSchema';
import { AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema } from './AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema';
import { CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema } from './CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema';

export const ClauseAnalysisCreateWithoutClauseInputSchema: z.ZodType<Prisma.ClauseAnalysisCreateWithoutClauseInput> = z.strictObject({
  id: z.cuid().optional(),
  severity: z.lazy(() => SeveritySchema).optional(),
  riskScore: z.number().int().optional(),
  triggerWarnings: z.union([ z.lazy(() => ClauseAnalysisCreatetriggerWarningsInputSchema), z.string().array() ]).optional(),
  run: z.lazy(() => AnalysisRunCreateNestedOneWithoutClauseAnalysesInputSchema),
  categoryHits: z.lazy(() => CategoryHitCreateNestedManyWithoutClauseAnalysisInputSchema).optional(),
});

export default ClauseAnalysisCreateWithoutClauseInputSchema;
