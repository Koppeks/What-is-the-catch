import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AnalysisRunOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AnalysisRunOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default AnalysisRunOrderByRelationAggregateInputSchema;
