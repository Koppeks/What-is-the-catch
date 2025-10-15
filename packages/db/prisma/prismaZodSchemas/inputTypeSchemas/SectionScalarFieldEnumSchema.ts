import { z } from 'zod';

export const SectionScalarFieldEnumSchema = z.enum(['id','documentId','headingBlockId','parentId']);

export default SectionScalarFieldEnumSchema;
