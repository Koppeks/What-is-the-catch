import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentTriggerSumOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentTriggerSumOrderByAggregateInput> = z.strictObject({
  minConfidence: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  to: z.lazy(() => SortOrderSchema).optional(),
});

export default DocumentTriggerSumOrderByAggregateInputSchema;
