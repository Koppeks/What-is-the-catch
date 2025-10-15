import { z } from 'zod';

export const BlockScalarFieldEnumSchema = z.enum(['id','documentId','sectionId','order','kind','level','ordinalPath','title','text','html','anchor','createdAt','updatedAt']);

export default BlockScalarFieldEnumSchema;
