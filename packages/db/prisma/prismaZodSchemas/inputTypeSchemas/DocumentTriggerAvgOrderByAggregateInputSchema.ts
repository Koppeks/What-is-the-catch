import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentTriggerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentTriggerAvgOrderByAggregateInput> = z.object({
  minConfidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerAvgOrderByAggregateInput>;

export default DocumentTriggerAvgOrderByAggregateInputSchema;
