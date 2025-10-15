import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentOrderByWithRelationInputSchema } from './DocumentOrderByWithRelationInputSchema';
import { SectionOrderByWithRelationInputSchema } from './SectionOrderByWithRelationInputSchema';
import { SectionOrderByRelationAggregateInputSchema } from './SectionOrderByRelationAggregateInputSchema';

export const BlockOrderByWithRelationInputSchema: z.ZodType<Prisma.BlockOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  sectionId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  level: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  ordinalPath: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  html: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  anchor: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  document: z.lazy(() => DocumentOrderByWithRelationInputSchema).optional(),
  section: z.lazy(() => SectionOrderByWithRelationInputSchema).optional(),
  Section: z.lazy(() => SectionOrderByRelationAggregateInputSchema).optional(),
});

export default BlockOrderByWithRelationInputSchema;
