import { z } from 'zod';
import { TriggerWithRelationsSchema, TriggerPartialWithRelationsSchema } from './TriggerSchema'
import type { TriggerWithRelations, TriggerPartialWithRelations } from './TriggerSchema'

/////////////////////////////////////////
// HITTER SCHEMA
/////////////////////////////////////////

export const HitterSchema = z.object({
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

export type Hitter = z.infer<typeof HitterSchema>

/////////////////////////////////////////
// HITTER PARTIAL SCHEMA
/////////////////////////////////////////

export const HitterPartialSchema = HitterSchema.partial()

export type HitterPartial = z.infer<typeof HitterPartialSchema>

/////////////////////////////////////////
// HITTER RELATION SCHEMA
/////////////////////////////////////////

export type HitterRelations = {
  Trigger: TriggerWithRelations[];
};

export type HitterWithRelations = z.infer<typeof HitterSchema> & HitterRelations

export const HitterWithRelationsSchema: z.ZodType<HitterWithRelations> = HitterSchema.merge(z.object({
  Trigger: z.lazy(() => TriggerWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// HITTER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type HitterPartialRelations = {
  Trigger?: TriggerPartialWithRelations[];
};

export type HitterPartialWithRelations = z.infer<typeof HitterPartialSchema> & HitterPartialRelations

export const HitterPartialWithRelationsSchema: z.ZodType<HitterPartialWithRelations> = HitterPartialSchema.merge(z.object({
  Trigger: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
})).partial()

export type HitterWithPartialRelations = z.infer<typeof HitterSchema> & HitterPartialRelations

export const HitterWithPartialRelationsSchema: z.ZodType<HitterWithPartialRelations> = HitterSchema.merge(z.object({
  Trigger: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
}).partial())

export default HitterSchema;
