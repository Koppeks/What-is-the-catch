import { z } from 'zod';
import { AvailableRolesSchema } from '../inputTypeSchemas/AvailableRolesSchema'
import { AccountStatusSchema } from '../inputTypeSchemas/AccountStatusSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  userRole: AvailableRolesSchema,
  subscriptionStatus: AccountStatusSchema,
  id: z.cuid(),
  email: z.string(),
  username: z.string(),
  password: z.string(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

export default UserSchema;
