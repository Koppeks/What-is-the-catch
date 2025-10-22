import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentOrderByWithRelationInputSchema } from './DocumentOrderByWithRelationInputSchema';
import { SectionOrderByRelationAggregateInputSchema } from './SectionOrderByRelationAggregateInputSchema';
import { BlockOrderByRelationAggregateInputSchema } from './BlockOrderByRelationAggregateInputSchema';

export const SectionOrderByWithRelationInputSchema: z.ZodType<Prisma.SectionOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  ordinalPath: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  headingText: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  headingHtml: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  headingAnchor: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  document: z.lazy(() => DocumentOrderByWithRelationInputSchema).optional(),
  parent: z.lazy(() => SectionOrderByWithRelationInputSchema).optional(),
  children: z.lazy(() => SectionOrderByRelationAggregateInputSchema).optional(),
  blocks: z.lazy(() => BlockOrderByRelationAggregateInputSchema).optional(),
});

export default SectionOrderByWithRelationInputSchema;
