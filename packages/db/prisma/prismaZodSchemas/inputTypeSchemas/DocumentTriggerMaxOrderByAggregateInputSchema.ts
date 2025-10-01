import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentTriggerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentTriggerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  triggerId: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  minConfidence: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerMaxOrderByAggregateInput>;

export default DocumentTriggerMaxOrderByAggregateInputSchema;
