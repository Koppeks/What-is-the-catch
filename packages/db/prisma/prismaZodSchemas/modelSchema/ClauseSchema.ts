import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { DocumentWithRelationsSchema, DocumentPartialWithRelationsSchema } from './DocumentSchema'
import type { DocumentWithRelations, DocumentPartialWithRelations } from './DocumentSchema'

/////////////////////////////////////////
// CLAUSE SCHEMA
/////////////////////////////////////////

export const ClauseSchema = z.object({
  id: z.cuid(),
  documentId: z.string(),
  parentId: z.string().nullish(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Clause = z.infer<typeof ClauseSchema>

/////////////////////////////////////////
// CLAUSE PARTIAL SCHEMA
/////////////////////////////////////////

export const ClausePartialSchema = ClauseSchema.partial()

export type ClausePartial = z.infer<typeof ClausePartialSchema>

/////////////////////////////////////////
// CLAUSE RELATION SCHEMA
/////////////////////////////////////////

export type ClauseRelations = {
  document: DocumentWithRelations;
  parent?: ClauseWithRelations | null;
  children: ClauseWithRelations[];
};

export type ClauseWithRelations = Omit<z.infer<typeof ClauseSchema>, "meta"> & {
  meta?: JsonValueType | null;
} & ClauseRelations

export const ClauseWithRelationsSchema: z.ZodType<ClauseWithRelations> = ClauseSchema.merge(z.object({
  document: z.lazy(() => DocumentWithRelationsSchema),
  parent: z.lazy(() => ClauseWithRelationsSchema).nullish(),
  children: z.lazy(() => ClauseWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CLAUSE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ClausePartialRelations = {
  document?: DocumentPartialWithRelations;
  parent?: ClausePartialWithRelations | null;
  children?: ClausePartialWithRelations[];
};

export type ClausePartialWithRelations = Omit<z.infer<typeof ClausePartialSchema>, "meta"> & {
  meta?: JsonValueType | null;
} & ClausePartialRelations

export const ClausePartialWithRelationsSchema: z.ZodType<ClausePartialWithRelations> = ClausePartialSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  parent: z.lazy(() => ClausePartialWithRelationsSchema).nullish(),
  children: z.lazy(() => ClausePartialWithRelationsSchema).array(),
})).partial()

export type ClauseWithPartialRelations = Omit<z.infer<typeof ClauseSchema>, "meta"> & {
  meta?: JsonValueType | null;
} & ClausePartialRelations

export const ClauseWithPartialRelationsSchema: z.ZodType<ClauseWithPartialRelations> = ClauseSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  parent: z.lazy(() => ClausePartialWithRelationsSchema).nullish(),
  children: z.lazy(() => ClausePartialWithRelationsSchema).array(),
}).partial())

export default ClauseSchema;
