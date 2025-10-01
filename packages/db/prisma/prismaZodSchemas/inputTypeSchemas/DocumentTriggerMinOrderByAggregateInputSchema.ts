import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentTriggerMinOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentTriggerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  triggerId: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  minConfidence: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerMinOrderByAggregateInput>;

export default DocumentTriggerMinOrderByAggregateInputSchema;
