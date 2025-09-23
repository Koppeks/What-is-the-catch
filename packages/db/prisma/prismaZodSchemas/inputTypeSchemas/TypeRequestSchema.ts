import { z } from 'zod';

export const TypeRequestSchema = z.enum(['PASTE_TEXT','UPLOAD','URL_SCRAPE','API','EMBEDED']);

export type TypeRequestType = `${z.infer<typeof TypeRequestSchema>}`

export default TypeRequestSchema;
