import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumAvailableRolesWithAggregatesFilterSchema } from './EnumAvailableRolesWithAggregatesFilterSchema';
import { AvailableRolesSchema } from './AvailableRolesSchema';
import { EnumAccountStatusWithAggregatesFilterSchema } from './EnumAccountStatusWithAggregatesFilterSchema';
import { AccountStatusSchema } from './AccountStatusSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userRole: z.union([ z.lazy(() => EnumAvailableRolesWithAggregatesFilterSchema), z.lazy(() => AvailableRolesSchema) ]).optional(),
  subscriptionStatus: z.union([ z.lazy(() => EnumAccountStatusWithAggregatesFilterSchema), z.lazy(() => AccountStatusSchema) ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default UserScalarWhereWithAggregatesInputSchema;
