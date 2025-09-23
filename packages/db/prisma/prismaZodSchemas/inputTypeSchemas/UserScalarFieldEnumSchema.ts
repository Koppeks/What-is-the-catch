import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','username','password','userRole','subscriptionStatus','updatedAt','createdAt']);

export default UserScalarFieldEnumSchema;
