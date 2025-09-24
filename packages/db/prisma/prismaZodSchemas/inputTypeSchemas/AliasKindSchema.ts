import { z } from 'zod';

export const AliasKindSchema = z.enum(['BRAND','ALIAS','LEGAL_ENTITY']);

export type AliasKindType = `${z.infer<typeof AliasKindSchema>}`

export default AliasKindSchema;
