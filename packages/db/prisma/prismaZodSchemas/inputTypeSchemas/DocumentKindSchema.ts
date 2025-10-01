import { z } from 'zod';

export const DocumentKindSchema = z.enum(['TOS','PRIVACY','COOKIE','EULA','OTHER']);

export type DocumentKindType = `${z.infer<typeof DocumentKindSchema>}`

export default DocumentKindSchema;
