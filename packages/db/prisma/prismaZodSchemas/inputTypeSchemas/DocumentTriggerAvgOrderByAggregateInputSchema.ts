import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentTriggerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentTriggerAvgOrderByAggregateInput> = z.strictObject({
  minConfidence: z.lazy(() => SortOrderSchema).optional(),
});

export default DocumentTriggerAvgOrderByAggregateInputSchema;
