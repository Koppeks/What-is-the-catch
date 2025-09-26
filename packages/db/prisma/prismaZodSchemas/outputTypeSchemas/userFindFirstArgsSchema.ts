import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputSchema } from '../inputTypeSchemas/userWhereInputSchema'
import { userOrderByWithRelationInputSchema } from '../inputTypeSchemas/userOrderByWithRelationInputSchema'
import { userWhereUniqueInputSchema } from '../inputTypeSchemas/userWhereUniqueInputSchema'
import { UserScalarFieldEnumSchema } from '../inputTypeSchemas/UserScalarFieldEnumSchema'
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

export const userFindFirstArgsSchema: z.ZodType<Prisma.userFindFirstArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.userFindFirstArgs>;

export default userFindFirstArgsSchema;
