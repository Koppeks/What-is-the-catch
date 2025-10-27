import { z } from 'zod';

export const TriggerScalarFieldEnumSchema = z.enum(['id','key','label','description','patterns','source','state','mergedIntoId','reviewNotes','promotedAt','hitterId','defaultSeverity','createdAt','updatedAt']);

export default TriggerScalarFieldEnumSchema;
