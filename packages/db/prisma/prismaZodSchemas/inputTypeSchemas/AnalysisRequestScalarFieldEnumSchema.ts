import { z } from 'zod';

export const AnalysisRequestScalarFieldEnumSchema = z.enum(['id','type','status','sourceUrl','language','updatedAt','createdAt']);

export default AnalysisRequestScalarFieldEnumSchema;
