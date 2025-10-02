import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereInputSchema } from './AnalysisRunWhereInputSchema';

export const AnalysisRunScalarRelationFilterSchema: z.ZodType<Prisma.AnalysisRunScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => AnalysisRunWhereInputSchema).optional(),
  isNot: z.lazy(() => AnalysisRunWhereInputSchema).optional(),
});

export default AnalysisRunScalarRelationFilterSchema;
