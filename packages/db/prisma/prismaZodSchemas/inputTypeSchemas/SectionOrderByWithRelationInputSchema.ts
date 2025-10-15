import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentOrderByWithRelationInputSchema } from './DocumentOrderByWithRelationInputSchema';
import { BlockOrderByWithRelationInputSchema } from './BlockOrderByWithRelationInputSchema';
import { SectionOrderByRelationAggregateInputSchema } from './SectionOrderByRelationAggregateInputSchema';
import { BlockOrderByRelationAggregateInputSchema } from './BlockOrderByRelationAggregateInputSchema';

export const SectionOrderByWithRelationInputSchema: z.ZodType<Prisma.SectionOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  headingBlockId: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  document: z.lazy(() => DocumentOrderByWithRelationInputSchema).optional(),
  headingBlock: z.lazy(() => BlockOrderByWithRelationInputSchema).optional(),
  parent: z.lazy(() => SectionOrderByWithRelationInputSchema).optional(),
  children: z.lazy(() => SectionOrderByRelationAggregateInputSchema).optional(),
  Block: z.lazy(() => BlockOrderByRelationAggregateInputSchema).optional(),
});

export default SectionOrderByWithRelationInputSchema;
