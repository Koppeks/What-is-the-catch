import { z } from 'zod';
import { TriggerSourceSchema } from '../inputTypeSchemas/TriggerSourceSchema'
import { TriggerStateSchema } from '../inputTypeSchemas/TriggerStateSchema'
import { SeveritySchema } from '../inputTypeSchemas/SeveritySchema'
import { ClauseTypeWithRelationsSchema, ClauseTypePartialWithRelationsSchema } from './ClauseTypeSchema'
import type { ClauseTypeWithRelations, ClauseTypePartialWithRelations } from './ClauseTypeSchema'
import { TriggerHitWithRelationsSchema, TriggerHitPartialWithRelationsSchema } from './TriggerHitSchema'
import type { TriggerHitWithRelations, TriggerHitPartialWithRelations } from './TriggerHitSchema'
import { AnalysisRequestWithRelationsSchema, AnalysisRequestPartialWithRelationsSchema } from './AnalysisRequestSchema'
import type { AnalysisRequestWithRelations, AnalysisRequestPartialWithRelations } from './AnalysisRequestSchema'

/////////////////////////////////////////
// TRIGGER SCHEMA
/////////////////////////////////////////

export const TriggerSchema = z.object({
  source: TriggerSourceSchema,
  state: TriggerStateSchema,
  defaultSeverity: SeveritySchema.nullish(),
  id: z.string().cuid(),
  key: z.string(),
  label: z.string(),
  description: z.string().nullish(),
  patterns: z.string().array(),
  mergedIntoId: z.string().nullish(),
  reviewNotes: z.string().nullish(),
  promotedAt: z.coerce.date().nullish(),
  clauseTypeId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Trigger = z.infer<typeof TriggerSchema>

/////////////////////////////////////////
// TRIGGER PARTIAL SCHEMA
/////////////////////////////////////////

export const TriggerPartialSchema = TriggerSchema.partial()

export type TriggerPartial = z.infer<typeof TriggerPartialSchema>

/////////////////////////////////////////
// TRIGGER RELATION SCHEMA
/////////////////////////////////////////

export type TriggerRelations = {
  mergedInto?: TriggerWithRelations | null;
  mergeFrom: TriggerWithRelations[];
  clauseType: ClauseTypeWithRelations;
  hits: TriggerHitWithRelations[];
  AnalysisRequest: AnalysisRequestWithRelations[];
};

export type TriggerWithRelations = z.infer<typeof TriggerSchema> & TriggerRelations

export const TriggerWithRelationsSchema: z.ZodType<TriggerWithRelations> = TriggerSchema.merge(z.object({
  mergedInto: z.lazy(() => TriggerWithRelationsSchema).nullish(),
  mergeFrom: z.lazy(() => TriggerWithRelationsSchema).array(),
  clauseType: z.lazy(() => ClauseTypeWithRelationsSchema),
  hits: z.lazy(() => TriggerHitWithRelationsSchema).array(),
  AnalysisRequest: z.lazy(() => AnalysisRequestWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TRIGGER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TriggerPartialRelations = {
  mergedInto?: TriggerPartialWithRelations | null;
  mergeFrom?: TriggerPartialWithRelations[];
  clauseType?: ClauseTypePartialWithRelations;
  hits?: TriggerHitPartialWithRelations[];
  AnalysisRequest?: AnalysisRequestPartialWithRelations[];
};

export type TriggerPartialWithRelations = z.infer<typeof TriggerPartialSchema> & TriggerPartialRelations

export const TriggerPartialWithRelationsSchema: z.ZodType<TriggerPartialWithRelations> = TriggerPartialSchema.merge(z.object({
  mergedInto: z.lazy(() => TriggerPartialWithRelationsSchema).nullish(),
  mergeFrom: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
  clauseType: z.lazy(() => ClauseTypePartialWithRelationsSchema),
  hits: z.lazy(() => TriggerHitPartialWithRelationsSchema).array(),
  AnalysisRequest: z.lazy(() => AnalysisRequestPartialWithRelationsSchema).array(),
})).partial()

export type TriggerWithPartialRelations = z.infer<typeof TriggerSchema> & TriggerPartialRelations

export const TriggerWithPartialRelationsSchema: z.ZodType<TriggerWithPartialRelations> = TriggerSchema.merge(z.object({
  mergedInto: z.lazy(() => TriggerPartialWithRelationsSchema).nullish(),
  mergeFrom: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
  clauseType: z.lazy(() => ClauseTypePartialWithRelationsSchema),
  hits: z.lazy(() => TriggerHitPartialWithRelationsSchema).array(),
  AnalysisRequest: z.lazy(() => AnalysisRequestPartialWithRelationsSchema).array(),
}).partial())

export default TriggerSchema;
