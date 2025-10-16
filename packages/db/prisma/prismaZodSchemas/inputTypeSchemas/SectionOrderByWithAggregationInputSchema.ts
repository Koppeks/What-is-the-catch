import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SectionCountOrderByAggregateInputSchema } from './SectionCountOrderByAggregateInputSchema';
import { SectionAvgOrderByAggregateInputSchema } from './SectionAvgOrderByAggregateInputSchema';
import { SectionMaxOrderByAggregateInputSchema } from './SectionMaxOrderByAggregateInputSchema';
import { SectionMinOrderByAggregateInputSchema } from './SectionMinOrderByAggregateInputSchema';
import { SectionSumOrderByAggregateInputSchema } from './SectionSumOrderByAggregateInputSchema';

export const SectionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SectionOrderByWithAggregationInput> = z.strictObject({
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
  _count: z.lazy(() => SectionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SectionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SectionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SectionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SectionSumOrderByAggregateInputSchema).optional(),
});

export default SectionOrderByWithAggregationInputSchema;
