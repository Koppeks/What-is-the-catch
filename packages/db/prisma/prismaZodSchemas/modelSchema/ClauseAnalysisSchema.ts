import { z } from 'zod';
import { SeveritySchema } from '../inputTypeSchemas/SeveritySchema'
import { AnalysisRunWithRelationsSchema, AnalysisRunPartialWithRelationsSchema } from './AnalysisRunSchema'
import type { AnalysisRunWithRelations, AnalysisRunPartialWithRelations } from './AnalysisRunSchema'
import { ClauseWithRelationsSchema, ClausePartialWithRelationsSchema } from './ClauseSchema'
import type { ClauseWithRelations, ClausePartialWithRelations } from './ClauseSchema'
import { CategoryHitWithRelationsSchema, CategoryHitPartialWithRelationsSchema } from './CategoryHitSchema'
import type { CategoryHitWithRelations, CategoryHitPartialWithRelations } from './CategoryHitSchema'

/////////////////////////////////////////
// CLAUSE ANALYSIS SCHEMA
/////////////////////////////////////////

export const ClauseAnalysisSchema = z.object({
  severity: SeveritySchema,
  id: z.cuid(),
  runId: z.string(),
  clauseId: z.string(),
  riskScore: z.number().int(),
  triggerWarnings: z.string().array(),
})

export type ClauseAnalysis = z.infer<typeof ClauseAnalysisSchema>

/////////////////////////////////////////
// CLAUSE ANALYSIS PARTIAL SCHEMA
/////////////////////////////////////////

export const ClauseAnalysisPartialSchema = ClauseAnalysisSchema.partial()

export type ClauseAnalysisPartial = z.infer<typeof ClauseAnalysisPartialSchema>

/////////////////////////////////////////
// CLAUSE ANALYSIS RELATION SCHEMA
/////////////////////////////////////////

export type ClauseAnalysisRelations = {
  run: AnalysisRunWithRelations;
  clause: ClauseWithRelations;
  categoryHits: CategoryHitWithRelations[];
};

export type ClauseAnalysisWithRelations = z.infer<typeof ClauseAnalysisSchema> & ClauseAnalysisRelations

export const ClauseAnalysisWithRelationsSchema: z.ZodType<ClauseAnalysisWithRelations> = ClauseAnalysisSchema.merge(z.object({
  run: z.lazy(() => AnalysisRunWithRelationsSchema),
  clause: z.lazy(() => ClauseWithRelationsSchema),
  categoryHits: z.lazy(() => CategoryHitWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CLAUSE ANALYSIS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ClauseAnalysisPartialRelations = {
  run?: AnalysisRunPartialWithRelations;
  clause?: ClausePartialWithRelations;
  categoryHits?: CategoryHitPartialWithRelations[];
};

export type ClauseAnalysisPartialWithRelations = z.infer<typeof ClauseAnalysisPartialSchema> & ClauseAnalysisPartialRelations

export const ClauseAnalysisPartialWithRelationsSchema: z.ZodType<ClauseAnalysisPartialWithRelations> = ClauseAnalysisPartialSchema.merge(z.object({
  run: z.lazy(() => AnalysisRunPartialWithRelationsSchema),
  clause: z.lazy(() => ClausePartialWithRelationsSchema),
  categoryHits: z.lazy(() => CategoryHitPartialWithRelationsSchema).array(),
})).partial()

export type ClauseAnalysisWithPartialRelations = z.infer<typeof ClauseAnalysisSchema> & ClauseAnalysisPartialRelations

export const ClauseAnalysisWithPartialRelationsSchema: z.ZodType<ClauseAnalysisWithPartialRelations> = ClauseAnalysisSchema.merge(z.object({
  run: z.lazy(() => AnalysisRunPartialWithRelationsSchema),
  clause: z.lazy(() => ClausePartialWithRelationsSchema),
  categoryHits: z.lazy(() => CategoryHitPartialWithRelationsSchema).array(),
}).partial())

export default ClauseAnalysisSchema;
