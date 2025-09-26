import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateInputSchema } from '../inputTypeSchemas/userUpdateInputSchema'
import { userUncheckedUpdateInputSchema } from '../inputTypeSchemas/userUncheckedUpdateInputSchema'
import { userWhereUniqueInputSchema } from '../inputTypeSchemas/userWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const userSelectSchema: z.ZodType<Prisma.userSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  userRole: z.boolean().optional(),
  subscriptionStatus: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const userUpdateArgsSchema: z.ZodType<Prisma.userUpdateArgs> = z.object({
  select: userSelectSchema.optional(),
  data: z.union([ userUpdateInputSchema,userUncheckedUpdateInputSchema ]),
  where: userWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.userUpdateArgs>;

export default userUpdateArgsSchema;
