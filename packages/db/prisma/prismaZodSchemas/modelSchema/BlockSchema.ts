import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BlockKindSchema } from '../inputTypeSchemas/BlockKindSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { DocumentWithRelationsSchema, DocumentPartialWithRelationsSchema } from './DocumentSchema'
import type { DocumentWithRelations, DocumentPartialWithRelations } from './DocumentSchema'
import { SectionWithRelationsSchema, SectionPartialWithRelationsSchema } from './SectionSchema'
import type { SectionWithRelations, SectionPartialWithRelations } from './SectionSchema'

/////////////////////////////////////////
// BLOCK SCHEMA
/////////////////////////////////////////

export const BlockSchema = z.object({
  kind: BlockKindSchema,
  id: z.cuid(),
  documentId: z.string(),
  sectionId: z.string(),
  order: z.number().int(),
  level: z.number().int().nullish(),
  ordinalPath: z.string().nullish(),
  title: z.string().nullish(),
  text: z.string(),
  html: z.string().nullish(),
  anchor: JsonValueSchema.nullable(),
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
  section: SectionWithRelations;
};

export type BlockWithRelations = Omit<z.infer<typeof BlockSchema>, "anchor"> & {
  anchor?: JsonValueType | null;
} & BlockRelations

export const BlockWithRelationsSchema: z.ZodType<BlockWithRelations> = BlockSchema.merge(z.object({
  document: z.lazy(() => DocumentWithRelationsSchema),
  section: z.lazy(() => SectionWithRelationsSchema),
}))

/////////////////////////////////////////
// BLOCK PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BlockPartialRelations = {
  document?: DocumentPartialWithRelations;
  section?: SectionPartialWithRelations;
};

export type BlockPartialWithRelations = Omit<z.infer<typeof BlockPartialSchema>, "anchor"> & {
  anchor?: JsonValueType | null;
} & BlockPartialRelations

export const BlockPartialWithRelationsSchema: z.ZodType<BlockPartialWithRelations> = BlockPartialSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  section: z.lazy(() => SectionPartialWithRelationsSchema),
})).partial()

export type BlockWithPartialRelations = Omit<z.infer<typeof BlockSchema>, "anchor"> & {
  anchor?: JsonValueType | null;
} & BlockPartialRelations

export const BlockWithPartialRelationsSchema: z.ZodType<BlockWithPartialRelations> = BlockSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  section: z.lazy(() => SectionPartialWithRelationsSchema),
}).partial())

export default BlockSchema;
