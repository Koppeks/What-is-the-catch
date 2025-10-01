import { z } from 'zod';

export const AnalysisRunScalarFieldEnumSchema = z.enum(['id','documentId','status','engineVersion','startedAt','finishedAt','overallRisk','notes']);

export default AnalysisRunScalarFieldEnumSchema;
