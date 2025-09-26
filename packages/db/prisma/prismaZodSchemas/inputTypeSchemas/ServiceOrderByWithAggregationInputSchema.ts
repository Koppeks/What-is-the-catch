import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ServiceCountOrderByAggregateInputSchema } from './ServiceCountOrderByAggregateInputSchema';
import { ServiceMaxOrderByAggregateInputSchema } from './ServiceMaxOrderByAggregateInputSchema';
import { ServiceMinOrderByAggregateInputSchema } from './ServiceMinOrderByAggregateInputSchema';

export const ServiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServiceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ServiceCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServiceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServiceMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceOrderByWithAggregationInput>;

export default ServiceOrderByWithAggregationInputSchema;
