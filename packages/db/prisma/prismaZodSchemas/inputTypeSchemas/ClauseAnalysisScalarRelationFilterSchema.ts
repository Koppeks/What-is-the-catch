import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereInputSchema } from './ClauseAnalysisWhereInputSchema';

export const ClauseAnalysisScalarRelationFilterSchema: z.ZodType<Prisma.ClauseAnalysisScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
  isNot: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
});

export default ClauseAnalysisScalarRelationFilterSchema;
