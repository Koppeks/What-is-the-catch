import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { DocumentWithRelationsSchema, DocumentPartialWithRelationsSchema } from './DocumentSchema'
import type { DocumentWithRelations, DocumentPartialWithRelations } from './DocumentSchema'

/////////////////////////////////////////
// BLOCK SCHEMA
/////////////////////////////////////////

export const BlockSchema = z.object({
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

export type Block = z.infer<typeof BlockSchema>

/////////////////////////////////////////
// BLOCK PARTIAL SCHEMA
/////////////////////////////////////////

export const BlockPartialSchema = BlockSchema.partial()

export type BlockPartial = z.infer<typeof BlockPartialSchema>

/////////////////////////////////////////
// BLOCK RELATION SCHEMA
/////////////////////////////////////////

export type BlockRelations = {
  document: DocumentWithRelations;
  parent?: BlockWithRelations | null;
  children: BlockWithRelations[];
};

export type BlockWithRelations = Omit<z.infer<typeof BlockSchema>, "meta"> & {
  meta?: JsonValueType | null;
} & BlockRelations

export const BlockWithRelationsSchema: z.ZodType<BlockWithRelations> = BlockSchema.merge(z.object({
  document: z.lazy(() => DocumentWithRelationsSchema),
  parent: z.lazy(() => BlockWithRelationsSchema).nullish(),
  children: z.lazy(() => BlockWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BLOCK PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BlockPartialRelations = {
  document?: DocumentPartialWithRelations;
  parent?: BlockPartialWithRelations | null;
  children?: BlockPartialWithRelations[];
};

export type BlockPartialWithRelations = Omit<z.infer<typeof BlockPartialSchema>, "meta"> & {
  meta?: JsonValueType | null;
} & BlockPartialRelations

export const BlockPartialWithRelationsSchema: z.ZodType<BlockPartialWithRelations> = BlockPartialSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  parent: z.lazy(() => BlockPartialWithRelationsSchema).nullish(),
  children: z.lazy(() => BlockPartialWithRelationsSchema).array(),
})).partial()

export type BlockWithPartialRelations = Omit<z.infer<typeof BlockSchema>, "meta"> & {
  meta?: JsonValueType | null;
} & BlockPartialRelations

export const BlockWithPartialRelationsSchema: z.ZodType<BlockWithPartialRelations> = BlockSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  parent: z.lazy(() => BlockPartialWithRelationsSchema).nullish(),
  children: z.lazy(() => BlockPartialWithRelationsSchema).array(),
}).partial())

export default BlockSchema;
