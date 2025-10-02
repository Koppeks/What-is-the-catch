import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereInputSchema } from './ClauseAnalysisWhereInputSchema';

export const ClauseAnalysisListRelationFilterSchema: z.ZodType<Prisma.ClauseAnalysisListRelationFilter> = z.strictObject({
  every: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
  some: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
  none: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
});

export default ClauseAnalysisListRelationFilterSchema;
