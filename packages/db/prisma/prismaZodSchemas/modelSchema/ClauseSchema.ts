import { z } from 'zod';
import { SeveritySchema } from '../inputTypeSchemas/SeveritySchema'
import { AnalysisRequestWithRelationsSchema, AnalysisRequestPartialWithRelationsSchema } from './AnalysisRequestSchema'
import type { AnalysisRequestWithRelations, AnalysisRequestPartialWithRelations } from './AnalysisRequestSchema'
import { TriggerHitWithRelationsSchema, TriggerHitPartialWithRelationsSchema } from './TriggerHitSchema'
import type { TriggerHitWithRelations, TriggerHitPartialWithRelations } from './TriggerHitSchema'

/////////////////////////////////////////
// CLAUSE SCHEMA
/////////////////////////////////////////

export const ClauseSchema = z.object({
  severity: SeveritySchema,
  id: z.string().cuid(),
  analysisRequestId: z.string(),
  order: z.number().int(),
  title: z.string(),
  content: z.string(),
  triggerWarning: z.string().array(),
  riskScore: z.number().int(),
  categories: z.string().array(),
  createdAt: z.coerce.date(),
})

export type Clause = z.infer<typeof ClauseSchema>

/////////////////////////////////////////
// CLAUSE PARTIAL SCHEMA
/////////////////////////////////////////

export const ClausePartialSchema = ClauseSchema.partial()

export type ClausePartial = z.infer<typeof ClausePartialSchema>

/////////////////////////////////////////
// CLAUSE RELATION SCHEMA
/////////////////////////////////////////

export type ClauseRelations = {
  analysisRequest: AnalysisRequestWithRelations;
  hits: TriggerHitWithRelations[];
};

export type ClauseWithRelations = z.infer<typeof ClauseSchema> & ClauseRelations

export const ClauseWithRelationsSchema: z.ZodType<ClauseWithRelations> = ClauseSchema.merge(z.object({
  analysisRequest: z.lazy(() => AnalysisRequestWithRelationsSchema),
  hits: z.lazy(() => TriggerHitWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CLAUSE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ClausePartialRelations = {
  analysisRequest?: AnalysisRequestPartialWithRelations;
  hits?: TriggerHitPartialWithRelations[];
};

export type ClausePartialWithRelations = z.infer<typeof ClausePartialSchema> & ClausePartialRelations

export const ClausePartialWithRelationsSchema: z.ZodType<ClausePartialWithRelations> = ClausePartialSchema.merge(z.object({
  analysisRequest: z.lazy(() => AnalysisRequestPartialWithRelationsSchema),
  hits: z.lazy(() => TriggerHitPartialWithRelationsSchema).array(),
})).partial()

export type ClauseWithPartialRelations = z.infer<typeof ClauseSchema> & ClausePartialRelations

export const ClauseWithPartialRelationsSchema: z.ZodType<ClauseWithPartialRelations> = ClauseSchema.merge(z.object({
  analysisRequest: z.lazy(() => AnalysisRequestPartialWithRelationsSchema),
  hits: z.lazy(() => TriggerHitPartialWithRelationsSchema).array(),
}).partial())

export default ClauseSchema;
