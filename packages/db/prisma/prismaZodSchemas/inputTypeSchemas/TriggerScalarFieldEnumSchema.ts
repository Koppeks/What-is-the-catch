import { z } from 'zod';

export const TriggerScalarFieldEnumSchema = z.enum(['id','key','label','description','patterns','source','state','mergedIntoId','reviewNotes','promotedAt','category','defaultSeverity','createdAt','updatedAt']);

export default TriggerScalarFieldEnumSchema;
