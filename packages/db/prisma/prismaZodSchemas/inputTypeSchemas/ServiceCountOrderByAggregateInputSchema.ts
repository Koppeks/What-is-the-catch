import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ServiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceCountOrderByAggregateInput>;

export default ServiceCountOrderByAggregateInputSchema;
