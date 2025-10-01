import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentOrderByWithRelationInputSchema } from './DocumentOrderByWithRelationInputSchema';
import { TriggerOrderByWithRelationInputSchema } from './TriggerOrderByWithRelationInputSchema';

export const DocumentTriggerOrderByWithRelationInputSchema: z.ZodType<Prisma.DocumentTriggerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  triggerId: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  minConfidence: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  document: z.lazy(() => DocumentOrderByWithRelationInputSchema).optional(),
  trigger: z.lazy(() => TriggerOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerOrderByWithRelationInput>;

export default DocumentTriggerOrderByWithRelationInputSchema;
