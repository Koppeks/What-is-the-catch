import { z } from 'zod';

export const AnalysisStatusSchema = z.enum(['PENDING','RUNNING','DONE','FAILED']);

export type AnalysisStatusType = `${z.infer<typeof AnalysisStatusSchema>}`

export default AnalysisStatusSchema;
