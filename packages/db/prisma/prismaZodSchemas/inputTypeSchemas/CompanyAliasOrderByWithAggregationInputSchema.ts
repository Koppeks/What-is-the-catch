import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CompanyAliasCountOrderByAggregateInputSchema } from './CompanyAliasCountOrderByAggregateInputSchema';
import { CompanyAliasMaxOrderByAggregateInputSchema } from './CompanyAliasMaxOrderByAggregateInputSchema';
import { CompanyAliasMinOrderByAggregateInputSchema } from './CompanyAliasMinOrderByAggregateInputSchema';

export const CompanyAliasOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompanyAliasOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  kind: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  valueNorm: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompanyAliasCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompanyAliasMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompanyAliasMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyAliasOrderByWithAggregationInput>;

export default CompanyAliasOrderByWithAggregationInputSchema;
