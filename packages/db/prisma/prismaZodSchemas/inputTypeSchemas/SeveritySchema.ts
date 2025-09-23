import { z } from 'zod';

export const SeveritySchema = z.enum(['NONE','LOW','MEDIUM','HIGH']);

export type SeverityType = `${z.infer<typeof SeveritySchema>}`

export default SeveritySchema;
