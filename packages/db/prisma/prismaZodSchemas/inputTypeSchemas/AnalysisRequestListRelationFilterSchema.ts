import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRequestWhereInputSchema } from './AnalysisRequestWhereInputSchema';

export const AnalysisRequestListRelationFilterSchema: z.ZodType<Prisma.AnalysisRequestListRelationFilter> = z.object({
  every: z.lazy(() => AnalysisRequestWhereInputSchema).optional(),
  some: z.lazy(() => AnalysisRequestWhereInputSchema).optional(),
  none: z.lazy(() => AnalysisRequestWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRequestListRelationFilter>;

export default AnalysisRequestListRelationFilterSchema;
