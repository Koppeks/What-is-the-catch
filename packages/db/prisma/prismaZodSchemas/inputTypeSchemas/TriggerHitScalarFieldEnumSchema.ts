import { z } from 'zod';

export const TriggerHitScalarFieldEnumSchema = z.enum(['id','clauseId','triggerId','confidence','matches']);

export default TriggerHitScalarFieldEnumSchema;
