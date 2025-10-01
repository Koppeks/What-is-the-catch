import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentTriggerSumOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentTriggerSumOrderByAggregateInput> = z.object({
  minConfidence: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerSumOrderByAggregateInput>;

export default DocumentTriggerSumOrderByAggregateInputSchema;
