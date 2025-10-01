import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereInputSchema } from './AnalysisRunWhereInputSchema';

export const AnalysisRunListRelationFilterSchema: z.ZodType<Prisma.AnalysisRunListRelationFilter> = z.object({
  every: z.lazy(() => AnalysisRunWhereInputSchema).optional(),
  some: z.lazy(() => AnalysisRunWhereInputSchema).optional(),
  none: z.lazy(() => AnalysisRunWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRunListRelationFilter>;

export default AnalysisRunListRelationFilterSchema;
