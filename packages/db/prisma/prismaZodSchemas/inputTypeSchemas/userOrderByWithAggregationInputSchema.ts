import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { userCountOrderByAggregateInputSchema } from './userCountOrderByAggregateInputSchema';
import { userMaxOrderByAggregateInputSchema } from './userMaxOrderByAggregateInputSchema';
import { userMinOrderByAggregateInputSchema } from './userMinOrderByAggregateInputSchema';

export const userOrderByWithAggregationInputSchema: z.ZodType<Prisma.userOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  userRole: z.lazy(() => SortOrderSchema).optional(),
  subscriptionStatus: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => userCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => userMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => userMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.userOrderByWithAggregationInput>;

export default userOrderByWithAggregationInputSchema;
