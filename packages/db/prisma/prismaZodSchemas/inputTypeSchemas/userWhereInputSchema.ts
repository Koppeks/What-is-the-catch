import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAvailableRolesFilterSchema } from './EnumAvailableRolesFilterSchema';
import { AvailableRolesSchema } from './AvailableRolesSchema';
import { EnumAccountStatusFilterSchema } from './EnumAccountStatusFilterSchema';
import { AccountStatusSchema } from './AccountStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userRole: z.union([ z.lazy(() => EnumAvailableRolesFilterSchema), z.lazy(() => AvailableRolesSchema) ]).optional(),
  subscriptionStatus: z.union([ z.lazy(() => EnumAccountStatusFilterSchema), z.lazy(() => AccountStatusSchema) ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default UserWhereInputSchema;
