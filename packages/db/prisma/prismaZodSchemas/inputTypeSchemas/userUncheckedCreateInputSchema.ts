import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailableRolesSchema } from './AvailableRolesSchema';
import { AccountStatusSchema } from './AccountStatusSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  email: z.string(),
  username: z.string(),
  password: z.string(),
  userRole: z.lazy(() => AvailableRolesSchema).optional(),
  subscriptionStatus: z.lazy(() => AccountStatusSchema).optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
});

export default UserUncheckedCreateInputSchema;
