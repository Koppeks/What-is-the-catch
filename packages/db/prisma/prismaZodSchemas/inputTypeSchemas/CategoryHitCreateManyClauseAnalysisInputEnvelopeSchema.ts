import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryHitCreateManyClauseAnalysisInputSchema } from './CategoryHitCreateManyClauseAnalysisInputSchema';

export const CategoryHitCreateManyClauseAnalysisInputEnvelopeSchema: z.ZodType<Prisma.CategoryHitCreateManyClauseAnalysisInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryHitCreateManyClauseAnalysisInputSchema),z.lazy(() => CategoryHitCreateManyClauseAnalysisInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.CategoryHitCreateManyClauseAnalysisInputEnvelope>;

export default CategoryHitCreateManyClauseAnalysisInputEnvelopeSchema;
