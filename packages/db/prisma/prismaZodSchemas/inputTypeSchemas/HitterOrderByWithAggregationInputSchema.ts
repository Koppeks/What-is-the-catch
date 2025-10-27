import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { HitterCountOrderByAggregateInputSchema } from './HitterCountOrderByAggregateInputSchema';
import { HitterAvgOrderByAggregateInputSchema } from './HitterAvgOrderByAggregateInputSchema';
import { HitterMaxOrderByAggregateInputSchema } from './HitterMaxOrderByAggregateInputSchema';
import { HitterMinOrderByAggregateInputSchema } from './HitterMinOrderByAggregateInputSchema';
import { HitterSumOrderByAggregateInputSchema } from './HitterSumOrderByAggregateInputSchema';

export const HitterOrderByWithAggregationInputSchema: z.ZodType<Prisma.HitterOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  defaultScoring: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  triggerInstruction: z.lazy(() => SortOrderSchema).optional(),
  triggerKeywords: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HitterCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HitterAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HitterMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HitterMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HitterSumOrderByAggregateInputSchema).optional(),
});

export default HitterOrderByWithAggregationInputSchema;
