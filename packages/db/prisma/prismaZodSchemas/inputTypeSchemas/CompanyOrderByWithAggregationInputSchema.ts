import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CompanyCountOrderByAggregateInputSchema } from './CompanyCountOrderByAggregateInputSchema';
import { CompanyMaxOrderByAggregateInputSchema } from './CompanyMaxOrderByAggregateInputSchema';
import { CompanyMinOrderByAggregateInputSchema } from './CompanyMinOrderByAggregateInputSchema';

export const CompanyOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  websiteUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  countryCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompanyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompanyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompanyMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyOrderByWithAggregationInput>;

export default CompanyOrderByWithAggregationInputSchema;
