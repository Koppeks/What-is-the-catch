import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AnalysisRunOrderByRelationAggregateInputSchema } from './AnalysisRunOrderByRelationAggregateInputSchema';
import { DocumentTriggerOrderByRelationAggregateInputSchema } from './DocumentTriggerOrderByRelationAggregateInputSchema';

export const DocumentOrderByWithRelationInputSchema: z.ZodType<Prisma.DocumentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  locale: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  kind: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  sourceUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  runs: z.lazy(() => AnalysisRunOrderByRelationAggregateInputSchema).optional(),
  documentRules: z.lazy(() => DocumentTriggerOrderByRelationAggregateInputSchema).optional(),
});

export default DocumentOrderByWithRelationInputSchema;
