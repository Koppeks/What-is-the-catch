import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputSchema } from '../inputTypeSchemas/userWhereUniqueInputSchema'
import { userCreateInputSchema } from '../inputTypeSchemas/userCreateInputSchema'
import { userUncheckedCreateInputSchema } from '../inputTypeSchemas/userUncheckedCreateInputSchema'
import { userUpdateInputSchema } from '../inputTypeSchemas/userUpdateInputSchema'
import { userUncheckedUpdateInputSchema } from '../inputTypeSchemas/userUncheckedUpdateInputSchema'
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

export const userUpsertArgsSchema: z.ZodType<Prisma.userUpsertArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
  create: z.union([ userCreateInputSchema,userUncheckedCreateInputSchema ]),
  update: z.union([ userUpdateInputSchema,userUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.userUpsertArgs>;

export default userUpsertArgsSchema;
