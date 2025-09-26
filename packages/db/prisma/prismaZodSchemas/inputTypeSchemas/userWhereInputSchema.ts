import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAvailableRolesFilterSchema } from './EnumAvailableRolesFilterSchema';
import { AvailableRolesSchema } from './AvailableRolesSchema';
import { EnumAccountStatusFilterSchema } from './EnumAccountStatusFilterSchema';
import { AccountStatusSchema } from './AccountStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const userWhereInputSchema: z.ZodType<Prisma.userWhereInput> = z.object({
  AND: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userRole: z.union([ z.lazy(() => EnumAvailableRolesFilterSchema),z.lazy(() => AvailableRolesSchema) ]).optional(),
  subscriptionStatus: z.union([ z.lazy(() => EnumAccountStatusFilterSchema),z.lazy(() => AccountStatusSchema) ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.userWhereInput>;

export default userWhereInputSchema;
