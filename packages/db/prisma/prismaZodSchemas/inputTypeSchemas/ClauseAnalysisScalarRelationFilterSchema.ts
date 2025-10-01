import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseAnalysisWhereInputSchema } from './ClauseAnalysisWhereInputSchema';

export const ClauseAnalysisScalarRelationFilterSchema: z.ZodType<Prisma.ClauseAnalysisScalarRelationFilter> = z.object({
  is: z.lazy(() => ClauseAnalysisWhereInputSchema).optional(),
  isNot: z.lazy(() => ClauseAnalysisWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisScalarRelationFilter>;

export default ClauseAnalysisScalarRelationFilterSchema;
