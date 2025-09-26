import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountStatusSchema } from './AccountStatusSchema';

export const NestedEnumAccountStatusFilterSchema: z.ZodType<Prisma.NestedEnumAccountStatusFilter> = z.object({
  equals: z.lazy(() => AccountStatusSchema).optional(),
  in: z.lazy(() => AccountStatusSchema).array().optional(),
  notIn: z.lazy(() => AccountStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountStatusSchema),z.lazy(() => NestedEnumAccountStatusFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedEnumAccountStatusFilter>;

export default NestedEnumAccountStatusFilterSchema;
