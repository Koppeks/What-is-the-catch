import { z } from 'zod';

export const ClauseScalarFieldEnumSchema = z.enum(['id','documentId','parentId','ordinalPath','title','text','order','depth','meta','createdAt','updatedAt']);

export default ClauseScalarFieldEnumSchema;
