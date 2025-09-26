import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountStatusSchema } from './AccountStatusSchema';
import { NestedEnumAccountStatusFilterSchema } from './NestedEnumAccountStatusFilterSchema';

export const EnumAccountStatusFilterSchema: z.ZodType<Prisma.EnumAccountStatusFilter> = z.object({
  equals: z.lazy(() => AccountStatusSchema).optional(),
  in: z.lazy(() => AccountStatusSchema).array().optional(),
  notIn: z.lazy(() => AccountStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountStatusSchema),z.lazy(() => NestedEnumAccountStatusFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.EnumAccountStatusFilter>;

export default EnumAccountStatusFilterSchema;
