import { z } from 'zod';
import { TypeRequestSchema } from '../inputTypeSchemas/TypeRequestSchema'
import { AnalysisStatusSchema } from '../inputTypeSchemas/AnalysisStatusSchema'
import { ClauseWithRelationsSchema, ClausePartialWithRelationsSchema } from './ClauseSchema'
import type { ClauseWithRelations, ClausePartialWithRelations } from './ClauseSchema'
import { TriggerWithRelationsSchema, TriggerPartialWithRelationsSchema } from './TriggerSchema'
import type { TriggerWithRelations, TriggerPartialWithRelations } from './TriggerSchema'

/////////////////////////////////////////
// ANALYSIS REQUEST SCHEMA
/////////////////////////////////////////

export const AnalysisRequestSchema = z.object({
  type: TypeRequestSchema,
  status: AnalysisStatusSchema,
  id: z.string().cuid(),
  sourceUrl: z.string().nullish(),
  language: z.string().nullish(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type AnalysisRequest = z.infer<typeof AnalysisRequestSchema>

/////////////////////////////////////////
// ANALYSIS REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const AnalysisRequestPartialSchema = AnalysisRequestSchema.partial()

export type AnalysisRequestPartial = z.infer<typeof AnalysisRequestPartialSchema>

/////////////////////////////////////////
// ANALYSIS REQUEST RELATION SCHEMA
/////////////////////////////////////////

export type AnalysisRequestRelations = {
  clauses: ClauseWithRelations[];
  triggers: TriggerWithRelations[];
};

export type AnalysisRequestWithRelations = z.infer<typeof AnalysisRequestSchema> & AnalysisRequestRelations

export const AnalysisRequestWithRelationsSchema: z.ZodType<AnalysisRequestWithRelations> = AnalysisRequestSchema.merge(z.object({
  clauses: z.lazy(() => ClauseWithRelationsSchema).array(),
  triggers: z.lazy(() => TriggerWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ANALYSIS REQUEST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type AnalysisRequestPartialRelations = {
  clauses?: ClausePartialWithRelations[];
  triggers?: TriggerPartialWithRelations[];
};

export type AnalysisRequestPartialWithRelations = z.infer<typeof AnalysisRequestPartialSchema> & AnalysisRequestPartialRelations

export const AnalysisRequestPartialWithRelationsSchema: z.ZodType<AnalysisRequestPartialWithRelations> = AnalysisRequestPartialSchema.merge(z.object({
  clauses: z.lazy(() => ClausePartialWithRelationsSchema).array(),
  triggers: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
})).partial()

export type AnalysisRequestWithPartialRelations = z.infer<typeof AnalysisRequestSchema> & AnalysisRequestPartialRelations

export const AnalysisRequestWithPartialRelationsSchema: z.ZodType<AnalysisRequestWithPartialRelations> = AnalysisRequestSchema.merge(z.object({
  clauses: z.lazy(() => ClausePartialWithRelationsSchema).array(),
  triggers: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
}).partial())

export default AnalysisRequestSchema;
