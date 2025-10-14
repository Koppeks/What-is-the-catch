import { z } from 'zod';
import { TriggerSourceSchema } from '../inputTypeSchemas/TriggerSourceSchema'
import { TriggerStateSchema } from '../inputTypeSchemas/TriggerStateSchema'
import { SeveritySchema } from '../inputTypeSchemas/SeveritySchema'
import { ClauseCategoryWithRelationsSchema, ClauseCategoryPartialWithRelationsSchema } from './ClauseCategorySchema'
import type { ClauseCategoryWithRelations, ClauseCategoryPartialWithRelations } from './ClauseCategorySchema'
import { DocumentTriggerWithRelationsSchema, DocumentTriggerPartialWithRelationsSchema } from './DocumentTriggerSchema'
import type { DocumentTriggerWithRelations, DocumentTriggerPartialWithRelations } from './DocumentTriggerSchema'

/////////////////////////////////////////
// TRIGGER SCHEMA
/////////////////////////////////////////

export const TriggerSchema = z.object({
  source: TriggerSourceSchema,
  state: TriggerStateSchema,
  defaultSeverity: SeveritySchema.nullish(),
  id: z.cuid(),
  key: z.string(),
  label: z.string(),
  description: z.string().nullish(),
  patterns: z.string().array(),
  mergedIntoId: z.string().nullish(),
  reviewNotes: z.string().nullish(),
  promotedAt: z.coerce.date().nullish(),
  clauseCategoryId: z.string(),
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
  clauseCategory: ClauseCategoryWithRelations;
  documentRules: DocumentTriggerWithRelations[];
};

export type TriggerWithRelations = z.infer<typeof TriggerSchema> & TriggerRelations

export const TriggerWithRelationsSchema: z.ZodType<TriggerWithRelations> = TriggerSchema.merge(z.object({
  mergedInto: z.lazy(() => TriggerWithRelationsSchema).nullish(),
  mergeFrom: z.lazy(() => TriggerWithRelationsSchema).array(),
  clauseCategory: z.lazy(() => ClauseCategoryWithRelationsSchema),
  documentRules: z.lazy(() => DocumentTriggerWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TRIGGER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TriggerPartialRelations = {
  mergedInto?: TriggerPartialWithRelations | null;
  mergeFrom?: TriggerPartialWithRelations[];
  clauseCategory?: ClauseCategoryPartialWithRelations;
  documentRules?: DocumentTriggerPartialWithRelations[];
};

export type TriggerPartialWithRelations = z.infer<typeof TriggerPartialSchema> & TriggerPartialRelations

export const TriggerPartialWithRelationsSchema: z.ZodType<TriggerPartialWithRelations> = TriggerPartialSchema.merge(z.object({
  mergedInto: z.lazy(() => TriggerPartialWithRelationsSchema).nullish(),
  mergeFrom: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
  clauseCategory: z.lazy(() => ClauseCategoryPartialWithRelationsSchema),
  documentRules: z.lazy(() => DocumentTriggerPartialWithRelationsSchema).array(),
})).partial()

export type TriggerWithPartialRelations = z.infer<typeof TriggerSchema> & TriggerPartialRelations

export const TriggerWithPartialRelationsSchema: z.ZodType<TriggerWithPartialRelations> = TriggerSchema.merge(z.object({
  mergedInto: z.lazy(() => TriggerPartialWithRelationsSchema).nullish(),
  mergeFrom: z.lazy(() => TriggerPartialWithRelationsSchema).array(),
  clauseCategory: z.lazy(() => ClauseCategoryPartialWithRelationsSchema),
  documentRules: z.lazy(() => DocumentTriggerPartialWithRelationsSchema).array(),
}).partial())

export default TriggerSchema;
