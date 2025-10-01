import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id','name','locale','kind','type','status','sourceUrl','updatedAt','createdAt']);

export default DocumentScalarFieldEnumSchema;
