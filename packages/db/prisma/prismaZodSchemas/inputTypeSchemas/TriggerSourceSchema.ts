import { z } from 'zod';

export const TriggerSourceSchema = z.enum(['SYSTEM','AI']);

export type TriggerSourceType = `${z.infer<typeof TriggerSourceSchema>}`

export default TriggerSourceSchema;
