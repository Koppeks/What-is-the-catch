import { z } from 'zod';

export const ClauseScalarFieldEnumSchema = z.enum(['id','analysisRequestId','order','title','content','triggerWarning','severity','riskScore','categories','createdAt']);

export default ClauseScalarFieldEnumSchema;
