import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { ClauseWithRelationsSchema, ClausePartialWithRelationsSchema } from './ClauseSchema'
import type { ClauseWithRelations, ClausePartialWithRelations } from './ClauseSchema'
import { TriggerWithRelationsSchema, TriggerPartialWithRelationsSchema } from './TriggerSchema'
import type { TriggerWithRelations, TriggerPartialWithRelations } from './TriggerSchema'

/////////////////////////////////////////
// TRIGGER HIT SCHEMA
/////////////////////////////////////////

export const TriggerHitSchema = z.object({
  id: z.string().cuid(),
  clauseId: z.string(),
  triggerId: z.string(),
  confidence: z.number().nullish(),
  matches: JsonValueSchema.nullable(),
})

export type TriggerHit = z.infer<typeof TriggerHitSchema>

/////////////////////////////////////////
// TRIGGER HIT PARTIAL SCHEMA
/////////////////////////////////////////

export const TriggerHitPartialSchema = TriggerHitSchema.partial()

export type TriggerHitPartial = z.infer<typeof TriggerHitPartialSchema>

/////////////////////////////////////////
// TRIGGER HIT RELATION SCHEMA
/////////////////////////////////////////

export type TriggerHitRelations = {
  clause: ClauseWithRelations;
  trigger: TriggerWithRelations;
};

export type TriggerHitWithRelations = Omit<z.infer<typeof TriggerHitSchema>, "matches"> & {
  matches?: JsonValueType | null;
} & TriggerHitRelations

export const TriggerHitWithRelationsSchema: z.ZodType<TriggerHitWithRelations> = TriggerHitSchema.merge(z.object({
  clause: z.lazy(() => ClauseWithRelationsSchema),
  trigger: z.lazy(() => TriggerWithRelationsSchema),
}))

/////////////////////////////////////////
// TRIGGER HIT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TriggerHitPartialRelations = {
  clause?: ClausePartialWithRelations;
  trigger?: TriggerPartialWithRelations;
};

export type TriggerHitPartialWithRelations = Omit<z.infer<typeof TriggerHitPartialSchema>, "matches"> & {
  matches?: JsonValueType | null;
} & TriggerHitPartialRelations

export const TriggerHitPartialWithRelationsSchema: z.ZodType<TriggerHitPartialWithRelations> = TriggerHitPartialSchema.merge(z.object({
  clause: z.lazy(() => ClausePartialWithRelationsSchema),
  trigger: z.lazy(() => TriggerPartialWithRelationsSchema),
})).partial()

export type TriggerHitWithPartialRelations = Omit<z.infer<typeof TriggerHitSchema>, "matches"> & {
  matches?: JsonValueType | null;
} & TriggerHitPartialRelations

export const TriggerHitWithPartialRelationsSchema: z.ZodType<TriggerHitWithPartialRelations> = TriggerHitSchema.merge(z.object({
  clause: z.lazy(() => ClausePartialWithRelationsSchema),
  trigger: z.lazy(() => TriggerPartialWithRelationsSchema),
}).partial())

export default TriggerHitSchema;
