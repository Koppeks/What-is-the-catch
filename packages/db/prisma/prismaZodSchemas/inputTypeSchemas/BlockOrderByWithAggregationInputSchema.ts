import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BlockCountOrderByAggregateInputSchema } from './BlockCountOrderByAggregateInputSchema';
import { BlockAvgOrderByAggregateInputSchema } from './BlockAvgOrderByAggregateInputSchema';
import { BlockMaxOrderByAggregateInputSchema } from './BlockMaxOrderByAggregateInputSchema';
import { BlockMinOrderByAggregateInputSchema } from './BlockMinOrderByAggregateInputSchema';
import { BlockSumOrderByAggregateInputSchema } from './BlockSumOrderByAggregateInputSchema';

export const BlockOrderByWithAggregationInputSchema: z.ZodType<Prisma.BlockOrderByWithAggregationInput> = z.strictObject({
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
  _count: z.lazy(() => BlockCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BlockAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BlockMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BlockMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BlockSumOrderByAggregateInputSchema).optional(),
});

export default BlockOrderByWithAggregationInputSchema;
