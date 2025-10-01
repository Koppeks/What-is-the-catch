import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereInputSchema } from './AnalysisRunWhereInputSchema';

export const AnalysisRunScalarRelationFilterSchema: z.ZodType<Prisma.AnalysisRunScalarRelationFilter> = z.object({
  is: z.lazy(() => AnalysisRunWhereInputSchema).optional(),
  isNot: z.lazy(() => AnalysisRunWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.AnalysisRunScalarRelationFilter>;

export default AnalysisRunScalarRelationFilterSchema;
