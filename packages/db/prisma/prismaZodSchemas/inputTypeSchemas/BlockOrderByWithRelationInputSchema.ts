import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentOrderByWithRelationInputSchema } from './DocumentOrderByWithRelationInputSchema';
import { BlockOrderByRelationAggregateInputSchema } from './BlockOrderByRelationAggregateInputSchema';

export const BlockOrderByWithRelationInputSchema: z.ZodType<Prisma.BlockOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  ordinalPath: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  depth: z.lazy(() => SortOrderSchema).optional(),
  meta: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  document: z.lazy(() => DocumentOrderByWithRelationInputSchema).optional(),
  parent: z.lazy(() => BlockOrderByWithRelationInputSchema).optional(),
  children: z.lazy(() => BlockOrderByRelationAggregateInputSchema).optional(),
});

export default BlockOrderByWithRelationInputSchema;
