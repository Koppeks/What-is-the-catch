import { z } from 'zod';

export const BlockScalarFieldEnumSchema = z.enum(['id','documentId','parentId','ordinalPath','title','text','order','depth','meta','createdAt','updatedAt']);

export default BlockScalarFieldEnumSchema;
