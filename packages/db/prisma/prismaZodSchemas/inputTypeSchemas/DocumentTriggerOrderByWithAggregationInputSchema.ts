import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentTriggerCountOrderByAggregateInputSchema } from './DocumentTriggerCountOrderByAggregateInputSchema';
import { DocumentTriggerAvgOrderByAggregateInputSchema } from './DocumentTriggerAvgOrderByAggregateInputSchema';
import { DocumentTriggerMaxOrderByAggregateInputSchema } from './DocumentTriggerMaxOrderByAggregateInputSchema';
import { DocumentTriggerMinOrderByAggregateInputSchema } from './DocumentTriggerMinOrderByAggregateInputSchema';
import { DocumentTriggerSumOrderByAggregateInputSchema } from './DocumentTriggerSumOrderByAggregateInputSchema';

export const DocumentTriggerOrderByWithAggregationInputSchema: z.ZodType<Prisma.DocumentTriggerOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  triggerId: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  minConfidence: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DocumentTriggerCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DocumentTriggerAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DocumentTriggerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DocumentTriggerMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DocumentTriggerSumOrderByAggregateInputSchema).optional(),
});

export default DocumentTriggerOrderByWithAggregationInputSchema;
