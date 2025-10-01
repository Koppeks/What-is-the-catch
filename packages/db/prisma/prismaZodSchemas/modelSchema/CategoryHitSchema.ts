import { z } from 'zod';
import { ClauseAnalysisWithRelationsSchema, ClauseAnalysisPartialWithRelationsSchema } from './ClauseAnalysisSchema'
import type { ClauseAnalysisWithRelations, ClauseAnalysisPartialWithRelations } from './ClauseAnalysisSchema'
import { ClauseCategoryWithRelationsSchema, ClauseCategoryPartialWithRelationsSchema } from './ClauseCategorySchema'
import type { ClauseCategoryWithRelations, ClauseCategoryPartialWithRelations } from './ClauseCategorySchema'

/////////////////////////////////////////
// CATEGORY HIT SCHEMA
/////////////////////////////////////////

export const CategoryHitSchema = z.object({
  id: z.string().cuid(),
  clauseAnalysisId: z.string(),
  categoryId: z.string(),
  confidence: z.number().nullish(),
})

export type CategoryHit = z.infer<typeof CategoryHitSchema>

/////////////////////////////////////////
// CATEGORY HIT PARTIAL SCHEMA
/////////////////////////////////////////

export const CategoryHitPartialSchema = CategoryHitSchema.partial()

export type CategoryHitPartial = z.infer<typeof CategoryHitPartialSchema>

/////////////////////////////////////////
// CATEGORY HIT RELATION SCHEMA
/////////////////////////////////////////

export type CategoryHitRelations = {
  clauseAnalysis: ClauseAnalysisWithRelations;
  category: ClauseCategoryWithRelations;
};

export type CategoryHitWithRelations = z.infer<typeof CategoryHitSchema> & CategoryHitRelations

export const CategoryHitWithRelationsSchema: z.ZodType<CategoryHitWithRelations> = CategoryHitSchema.merge(z.object({
  clauseAnalysis: z.lazy(() => ClauseAnalysisWithRelationsSchema),
  category: z.lazy(() => ClauseCategoryWithRelationsSchema),
}))

/////////////////////////////////////////
// CATEGORY HIT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CategoryHitPartialRelations = {
  clauseAnalysis?: ClauseAnalysisPartialWithRelations;
  category?: ClauseCategoryPartialWithRelations;
};

export type CategoryHitPartialWithRelations = z.infer<typeof CategoryHitPartialSchema> & CategoryHitPartialRelations

export const CategoryHitPartialWithRelationsSchema: z.ZodType<CategoryHitPartialWithRelations> = CategoryHitPartialSchema.merge(z.object({
  clauseAnalysis: z.lazy(() => ClauseAnalysisPartialWithRelationsSchema),
  category: z.lazy(() => ClauseCategoryPartialWithRelationsSchema),
})).partial()

export type CategoryHitWithPartialRelations = z.infer<typeof CategoryHitSchema> & CategoryHitPartialRelations

export const CategoryHitWithPartialRelationsSchema: z.ZodType<CategoryHitWithPartialRelations> = CategoryHitSchema.merge(z.object({
  clauseAnalysis: z.lazy(() => ClauseAnalysisPartialWithRelationsSchema),
  category: z.lazy(() => ClauseCategoryPartialWithRelationsSchema),
}).partial())

export default CategoryHitSchema;
