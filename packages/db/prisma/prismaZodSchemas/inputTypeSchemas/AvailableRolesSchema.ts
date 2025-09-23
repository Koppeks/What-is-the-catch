import { z } from 'zod';

export const AvailableRolesSchema = z.enum(['USER','ADMIN']);

export type AvailableRolesType = `${z.infer<typeof AvailableRolesSchema>}`

export default AvailableRolesSchema;
