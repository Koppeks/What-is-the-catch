import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TriggerOrderByRelationAggregateInputSchema } from './TriggerOrderByRelationAggregateInputSchema';
import { ClauseCategoryOrderByWithRelationInputSchema } from './ClauseCategoryOrderByWithRelationInputSchema';
import { DocumentTriggerOrderByRelationAggregateInputSchema } from './DocumentTriggerOrderByRelationAggregateInputSchema';

export const TriggerOrderByWithRelationInputSchema: z.ZodType<Prisma.TriggerOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patterns: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  mergedIntoId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  promotedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clauseCategoryId: z.lazy(() => SortOrderSchema).optional(),
  defaultSeverity: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mergedInto: z.lazy(() => TriggerOrderByWithRelationInputSchema).optional(),
  mergeFrom: z.lazy(() => TriggerOrderByRelationAggregateInputSchema).optional(),
  clauseCategory: z.lazy(() => ClauseCategoryOrderByWithRelationInputSchema).optional(),
  documentRules: z.lazy(() => DocumentTriggerOrderByRelationAggregateInputSchema).optional(),
});

export default TriggerOrderByWithRelationInputSchema;
