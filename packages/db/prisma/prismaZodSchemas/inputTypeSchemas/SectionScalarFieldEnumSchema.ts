import { z } from 'zod';

export const SectionScalarFieldEnumSchema = z.enum(['id','documentId','parentId','level','title','ordinalPath','headingText','headingHtml','headingAnchor','createdAt','updatedAt']);

export default SectionScalarFieldEnumSchema;
