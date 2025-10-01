import { z } from 'zod';

export const DocumentTriggerScalarFieldEnumSchema = z.enum(['id','documentId','triggerId','enabled','minConfidence','notes']);

export default DocumentTriggerScalarFieldEnumSchema;
