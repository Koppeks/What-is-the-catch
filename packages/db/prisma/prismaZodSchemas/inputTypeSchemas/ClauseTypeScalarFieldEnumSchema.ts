import { z } from 'zod';

export const ClauseTypeScalarFieldEnumSchema = z.enum(['id','slug','version','defaultScoring','label','isActive','createdAt','updatedAt']);

export default ClauseTypeScalarFieldEnumSchema;
