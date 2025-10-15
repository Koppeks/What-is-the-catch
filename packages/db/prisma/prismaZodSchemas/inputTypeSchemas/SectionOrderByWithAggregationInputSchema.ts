import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SectionCountOrderByAggregateInputSchema } from './SectionCountOrderByAggregateInputSchema';
import { SectionMaxOrderByAggregateInputSchema } from './SectionMaxOrderByAggregateInputSchema';
import { SectionMinOrderByAggregateInputSchema } from './SectionMinOrderByAggregateInputSchema';

export const SectionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SectionOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  headingBlockId: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => SectionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SectionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SectionMinOrderByAggregateInputSchema).optional(),
});

export default SectionOrderByWithAggregationInputSchema;
