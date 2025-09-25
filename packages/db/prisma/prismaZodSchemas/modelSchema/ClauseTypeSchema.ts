import { z } from 'zod';
import { TriggerWithRelationsSchema, TriggerPartialWithRelationsSchema } from './TriggerSchema'
import type { TriggerWithRelations, TriggerPartialWithRelations } from './TriggerSchema'

/////////////////////////////////////////
// CLAUSE TYPE SCHEMA
/////////////////////////////////////////

export const ClauseTypeSchema = z.object({
  id: z.string().cuid(),
  slug: z.string(),
  version: z.string(),
  defaultScoring: z.number(),
  label: z.string(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ClauseType = z.infer<typeof ClauseTypeSchema>

/////////////////////////////////////////
// CLAUSE TYPE PARTIAL SCHEMA
/////////////////////////////////////////

export const ClauseTypePartialSchema = ClauseTypeSchema.partial()

export type ClauseTypePartial = z.infer<typeof ClauseTypePartialSchema>

/////////////////////////////////////////
// CLAUSE TYPE RELATION SCHEMA
/////////////////////////////////////////

export type ClauseTypeRelations = {
  Trigger: TriggerWithRelations[];
};

export type ClauseTypeWithRelations = z.infer<typeof ClauseTypeSchema> & ClauseTypeRelations

export const ClauseTypeWithRelationsSchema: z.ZodType<ClauseTypeWithRelations> = ClauseTypeSchema.merge(z.object({
  Trigger: z.lazy(() => TriggerWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CLAUSE TYPE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ClauseTypePartialRelations = {
  Trigger?: TriggerPartialWithRelations[];
};

export type ClauseTypePartialWithRelations = z.infer<typeof ClauseTypePartialSchema> & ClauseTypePartialRelations

export const ClauseTypePartialWithRelationsSchema: z.ZodType<ClauseTypePartialWithRelations> = ClauseTypePartialSchema.merge(z.object({
  Trigger: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
})).partial()

export type ClauseTypeWithPartialRelations = z.infer<typeof ClauseTypeSchema> & ClauseTypePartialRelations

export const ClauseTypeWithPartialRelationsSchema: z.ZodType<ClauseTypeWithPartialRelations> = ClauseTypeSchema.merge(z.object({
  Trigger: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
}).partial())

export default ClauseTypeSchema;
