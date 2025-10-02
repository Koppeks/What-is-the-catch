import { z } from 'zod';
import { AnalysisStatusSchema } from '../inputTypeSchemas/AnalysisStatusSchema'
import { DocumentWithRelationsSchema, DocumentPartialWithRelationsSchema } from './DocumentSchema'
import type { DocumentWithRelations, DocumentPartialWithRelations } from './DocumentSchema'
import { ClauseAnalysisWithRelationsSchema, ClauseAnalysisPartialWithRelationsSchema } from './ClauseAnalysisSchema'
import type { ClauseAnalysisWithRelations, ClauseAnalysisPartialWithRelations } from './ClauseAnalysisSchema'

/////////////////////////////////////////
// ANALYSIS RUN SCHEMA
/////////////////////////////////////////

export const AnalysisRunSchema = z.object({
  status: AnalysisStatusSchema,
  id: z.cuid(),
  documentId: z.string(),
  engineVersion: z.string(),
  startedAt: z.coerce.date(),
  finishedAt: z.coerce.date(),
  overallRisk: z.number().int(),
  notes: z.string(),
})

export type AnalysisRun = z.infer<typeof AnalysisRunSchema>

/////////////////////////////////////////
// ANALYSIS RUN PARTIAL SCHEMA
/////////////////////////////////////////

export const AnalysisRunPartialSchema = AnalysisRunSchema.partial()

export type AnalysisRunPartial = z.infer<typeof AnalysisRunPartialSchema>

/////////////////////////////////////////
// ANALYSIS RUN RELATION SCHEMA
/////////////////////////////////////////

export type AnalysisRunRelations = {
  document: DocumentWithRelations;
  clauseAnalyses: ClauseAnalysisWithRelations[];
};

export type AnalysisRunWithRelations = z.infer<typeof AnalysisRunSchema> & AnalysisRunRelations

export const AnalysisRunWithRelationsSchema: z.ZodType<AnalysisRunWithRelations> = AnalysisRunSchema.merge(z.object({
  document: z.lazy(() => DocumentWithRelationsSchema),
  clauseAnalyses: z.lazy(() => ClauseAnalysisWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ANALYSIS RUN PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type AnalysisRunPartialRelations = {
  document?: DocumentPartialWithRelations;
  clauseAnalyses?: ClauseAnalysisPartialWithRelations[];
};

export type AnalysisRunPartialWithRelations = z.infer<typeof AnalysisRunPartialSchema> & AnalysisRunPartialRelations

export const AnalysisRunPartialWithRelationsSchema: z.ZodType<AnalysisRunPartialWithRelations> = AnalysisRunPartialSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  clauseAnalyses: z.lazy(() => ClauseAnalysisPartialWithRelationsSchema).array(),
})).partial()

export type AnalysisRunWithPartialRelations = z.infer<typeof AnalysisRunSchema> & AnalysisRunPartialRelations

export const AnalysisRunWithPartialRelationsSchema: z.ZodType<AnalysisRunWithPartialRelations> = AnalysisRunSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  clauseAnalyses: z.lazy(() => ClauseAnalysisPartialWithRelationsSchema).array(),
}).partial())

export default AnalysisRunSchema;
