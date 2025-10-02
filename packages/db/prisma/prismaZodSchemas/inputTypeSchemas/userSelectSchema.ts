import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  userRole: z.boolean().optional(),
  subscriptionStatus: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export default UserSelectSchema;
