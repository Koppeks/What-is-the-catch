import { z } from 'zod';
import { DocumentWithRelationsSchema, DocumentPartialWithRelationsSchema } from './DocumentSchema'
import type { DocumentWithRelations, DocumentPartialWithRelations } from './DocumentSchema'
import { TriggerWithRelationsSchema, TriggerPartialWithRelationsSchema } from './TriggerSchema'
import type { TriggerWithRelations, TriggerPartialWithRelations } from './TriggerSchema'

/////////////////////////////////////////
// DOCUMENT TRIGGER SCHEMA
/////////////////////////////////////////

export const DocumentTriggerSchema = z.object({
  id: z.cuid(),
  documentId: z.string(),
  triggerId: z.string(),
  enabled: z.boolean(),
  minConfidence: z.number().nullish(),
  notes: z.string().nullish(),
  from: z.number().int(),
  to: z.number().int(),
})

export type DocumentTrigger = z.infer<typeof DocumentTriggerSchema>

/////////////////////////////////////////
// DOCUMENT TRIGGER PARTIAL SCHEMA
/////////////////////////////////////////

export const DocumentTriggerPartialSchema = DocumentTriggerSchema.partial()

export type DocumentTriggerPartial = z.infer<typeof DocumentTriggerPartialSchema>

/////////////////////////////////////////
// DOCUMENT TRIGGER RELATION SCHEMA
/////////////////////////////////////////

export type DocumentTriggerRelations = {
  document: DocumentWithRelations;
  trigger: TriggerWithRelations;
};

export type DocumentTriggerWithRelations = z.infer<typeof DocumentTriggerSchema> & DocumentTriggerRelations

export const DocumentTriggerWithRelationsSchema: z.ZodType<DocumentTriggerWithRelations> = DocumentTriggerSchema.merge(z.object({
  document: z.lazy(() => DocumentWithRelationsSchema),
  trigger: z.lazy(() => TriggerWithRelationsSchema),
}))

/////////////////////////////////////////
// DOCUMENT TRIGGER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DocumentTriggerPartialRelations = {
  document?: DocumentPartialWithRelations;
  trigger?: TriggerPartialWithRelations;
};

export type DocumentTriggerPartialWithRelations = z.infer<typeof DocumentTriggerPartialSchema> & DocumentTriggerPartialRelations

export const DocumentTriggerPartialWithRelationsSchema: z.ZodType<DocumentTriggerPartialWithRelations> = DocumentTriggerPartialSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  trigger: z.lazy(() => TriggerPartialWithRelationsSchema),
})).partial()

export type DocumentTriggerWithPartialRelations = z.infer<typeof DocumentTriggerSchema> & DocumentTriggerPartialRelations

export const DocumentTriggerWithPartialRelationsSchema: z.ZodType<DocumentTriggerWithPartialRelations> = DocumentTriggerSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  trigger: z.lazy(() => TriggerPartialWithRelationsSchema),
}).partial())

export default DocumentTriggerSchema;
