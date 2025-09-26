import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TriggerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  mergedIntoId: z.lazy(() => SortOrderSchema).optional(),
  reviewNotes: z.lazy(() => SortOrderSchema).optional(),
  promotedAt: z.lazy(() => SortOrderSchema).optional(),
  clauseTypeId: z.lazy(() => SortOrderSchema).optional(),
  defaultSeverity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerMaxOrderByAggregateInput>;

export default TriggerMaxOrderByAggregateInputSchema;
