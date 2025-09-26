import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DomainMinOrderByAggregateInputSchema: z.ZodType<Prisma.DomainMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  host: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DomainMinOrderByAggregateInput>;

export default DomainMinOrderByAggregateInputSchema;
