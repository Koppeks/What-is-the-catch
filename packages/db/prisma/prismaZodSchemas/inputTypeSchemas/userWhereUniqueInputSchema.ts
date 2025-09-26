import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { userWhereInputSchema } from './userWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAvailableRolesFilterSchema } from './EnumAvailableRolesFilterSchema';
import { AvailableRolesSchema } from './AvailableRolesSchema';
import { EnumAccountStatusFilterSchema } from './EnumAccountStatusFilterSchema';
import { AccountStatusSchema } from './AccountStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const userWhereUniqueInputSchema: z.ZodType<Prisma.userWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userRole: z.union([ z.lazy(() => EnumAvailableRolesFilterSchema),z.lazy(() => AvailableRolesSchema) ]).optional(),
  subscriptionStatus: z.union([ z.lazy(() => EnumAccountStatusFilterSchema),z.lazy(() => AccountStatusSchema) ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict()) as z.ZodType<Prisma.userWhereUniqueInput>;

export default userWhereUniqueInputSchema;
