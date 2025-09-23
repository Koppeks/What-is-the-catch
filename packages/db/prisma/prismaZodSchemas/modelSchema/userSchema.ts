import { z } from 'zod';
import { AvailableRolesSchema } from '../inputTypeSchemas/AvailableRolesSchema'
import { AccountStatusSchema } from '../inputTypeSchemas/AccountStatusSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const userSchema = z.object({
  userRole: AvailableRolesSchema,
  subscriptionStatus: AccountStatusSchema,
  id: z.string().cuid(),
  email: z.string(),
  username: z.string(),
  password: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type user = z.infer<typeof userSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const userPartialSchema = userSchema.partial()

export type userPartial = z.infer<typeof userPartialSchema>

export default userSchema;
