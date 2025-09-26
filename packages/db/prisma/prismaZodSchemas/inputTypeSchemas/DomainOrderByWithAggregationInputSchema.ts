import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DomainCountOrderByAggregateInputSchema } from './DomainCountOrderByAggregateInputSchema';
import { DomainMaxOrderByAggregateInputSchema } from './DomainMaxOrderByAggregateInputSchema';
import { DomainMinOrderByAggregateInputSchema } from './DomainMinOrderByAggregateInputSchema';

export const DomainOrderByWithAggregationInputSchema: z.ZodType<Prisma.DomainOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  host: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DomainCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DomainMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DomainMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.DomainOrderByWithAggregationInput>;

export default DomainOrderByWithAggregationInputSchema;
