import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestWhereInputSchema } from './AnalysisRequestWhereInputSchema';

export const AnalysisRequestScalarRelationFilterSchema: z.ZodType<Prisma.AnalysisRequestScalarRelationFilter> = z.object({
  is: z.lazy(() => AnalysisRequestWhereInputSchema).optional(),
  isNot: z.lazy(() => AnalysisRequestWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestScalarRelationFilter>;

export default AnalysisRequestScalarRelationFilterSchema;
