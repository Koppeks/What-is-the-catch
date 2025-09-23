import { z } from 'zod';

export const TriggerStateSchema = z.enum(['PROPOSED','ACTIVE','MERGED','DEPRECATED']);

export type TriggerStateType = `${z.infer<typeof TriggerStateSchema>}`

export default TriggerStateSchema;
