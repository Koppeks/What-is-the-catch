import { z } from 'zod';

export const ClauseCategoryScalarFieldEnumSchema = z.enum(['id','slug','version','defaultScoring','label','isActive','triggerInstruction','triggerKeywords','createdAt','updatedAt']);

export default ClauseCategoryScalarFieldEnumSchema;
