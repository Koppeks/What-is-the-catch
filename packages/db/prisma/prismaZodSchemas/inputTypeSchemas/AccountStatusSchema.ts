import { z } from 'zod';

export const AccountStatusSchema = z.enum(['FREE','PRO']);

export type AccountStatusType = `${z.infer<typeof AccountStatusSchema>}`

export default AccountStatusSchema;
