import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TriggerCountOrderByAggregateInputSchema: z.ZodType<Prisma.TriggerCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  patterns: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  mergedIntoId: z.lazy(() => SortOrderSchema).optional(),
  reviewNotes: z.lazy(() => SortOrderSchema).optional(),
  promotedAt: z.lazy(() => SortOrderSchema).optional(),
  clauseCategoryId: z.lazy(() => SortOrderSchema).optional(),
  defaultSeverity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TriggerCountOrderByAggregateInputSchema;
