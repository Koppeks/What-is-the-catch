import { z } from 'zod';

export const HitterScalarFieldEnumSchema = z.enum(['id','slug','version','defaultScoring','label','isActive','triggerInstruction','triggerKeywords','createdAt','updatedAt']);

export default HitterScalarFieldEnumSchema;
