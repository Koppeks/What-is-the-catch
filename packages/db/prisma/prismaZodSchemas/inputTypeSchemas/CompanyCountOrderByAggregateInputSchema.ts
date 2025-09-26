import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompanyCountOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  websiteUrl: z.lazy(() => SortOrderSchema).optional(),
  countryCode: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyCountOrderByAggregateInput>;

export default CompanyCountOrderByAggregateInputSchema;
