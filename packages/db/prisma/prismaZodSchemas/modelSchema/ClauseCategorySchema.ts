import { z } from 'zod';
import { TriggerWithRelationsSchema, TriggerPartialWithRelationsSchema } from './TriggerSchema'
import type { TriggerWithRelations, TriggerPartialWithRelations } from './TriggerSchema'
import { CategoryHitWithRelationsSchema, CategoryHitPartialWithRelationsSchema } from './CategoryHitSchema'
import type { CategoryHitWithRelations, CategoryHitPartialWithRelations } from './CategoryHitSchema'

/////////////////////////////////////////
// CLAUSE CATEGORY SCHEMA
/////////////////////////////////////////

export const ClauseCategorySchema = z.object({
  id: z.cuid(),
  slug: z.string(),
  version: z.string(),
  defaultScoring: z.number(),
  label: z.string(),
  isActive: z.boolean(),
  triggerInstruction: z.string(),
  triggerKeywords: z.string().array(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ClauseCategory = z.infer<typeof ClauseCategorySchema>

/////////////////////////////////////////
// CLAUSE CATEGORY PARTIAL SCHEMA
/////////////////////////////////////////

export const ClauseCategoryPartialSchema = ClauseCategorySchema.partial()

export type ClauseCategoryPartial = z.infer<typeof ClauseCategoryPartialSchema>

/////////////////////////////////////////
// CLAUSE CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type ClauseCategoryRelations = {
  Trigger: TriggerWithRelations[];
  CategoryHit: CategoryHitWithRelations[];
};

export type ClauseCategoryWithRelations = z.infer<typeof ClauseCategorySchema> & ClauseCategoryRelations

export const ClauseCategoryWithRelationsSchema: z.ZodType<ClauseCategoryWithRelations> = ClauseCategorySchema.merge(z.object({
  Trigger: z.lazy(() => TriggerWithRelationsSchema).array(),
  CategoryHit: z.lazy(() => CategoryHitWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CLAUSE CATEGORY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ClauseCategoryPartialRelations = {
  Trigger?: TriggerPartialWithRelations[];
  CategoryHit?: CategoryHitPartialWithRelations[];
};

export type ClauseCategoryPartialWithRelations = z.infer<typeof ClauseCategoryPartialSchema> & ClauseCategoryPartialRelations

export const ClauseCategoryPartialWithRelationsSchema: z.ZodType<ClauseCategoryPartialWithRelations> = ClauseCategoryPartialSchema.merge(z.object({
  Trigger: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
  CategoryHit: z.lazy(() => CategoryHitPartialWithRelationsSchema).array(),
})).partial()

export type ClauseCategoryWithPartialRelations = z.infer<typeof ClauseCategorySchema> & ClauseCategoryPartialRelations

export const ClauseCategoryWithPartialRelationsSchema: z.ZodType<ClauseCategoryWithPartialRelations> = ClauseCategorySchema.merge(z.object({
  Trigger: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
  CategoryHit: z.lazy(() => CategoryHitPartialWithRelationsSchema).array(),
}).partial())

export default ClauseCategorySchema;
