import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const userSchema = z.object({
  id: z.string().cuid(),
})

export type user = z.infer<typeof userSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const userPartialSchema = userSchema.partial()

export type userPartial = z.infer<typeof userPartialSchema>

export default userSchema;
