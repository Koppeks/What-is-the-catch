import { z } from 'zod';

export const ClauseAnalysisScalarFieldEnumSchema = z.enum(['id','runId','clauseId','severity','riskScore','triggerWarnings']);

export default ClauseAnalysisScalarFieldEnumSchema;
