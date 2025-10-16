import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { DocumentWithRelationsSchema, DocumentPartialWithRelationsSchema } from './DocumentSchema'
import type { DocumentWithRelations, DocumentPartialWithRelations } from './DocumentSchema'
import { BlockWithRelationsSchema, BlockPartialWithRelationsSchema } from './BlockSchema'
import type { BlockWithRelations, BlockPartialWithRelations } from './BlockSchema'

/////////////////////////////////////////
// SECTION SCHEMA
/////////////////////////////////////////

export const SectionSchema = z.object({
  id: z.cuid(),
  documentId: z.string(),
  parentId: z.string().nullish(),
  level: z.number().int(),
  title: z.string().nullish(),
  ordinalPath: z.string().nullish(),
  headingText: z.string().nullish(),
  headingHtml: z.string().nullish(),
  headingAnchor: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Section = z.infer<typeof SectionSchema>

/////////////////////////////////////////
// SECTION PARTIAL SCHEMA
/////////////////////////////////////////

export const SectionPartialSchema = SectionSchema.partial()

export type SectionPartial = z.infer<typeof SectionPartialSchema>

/////////////////////////////////////////
// SECTION RELATION SCHEMA
/////////////////////////////////////////

export type SectionRelations = {
  document: DocumentWithRelations;
  parent?: SectionWithRelations | null;
  children: SectionWithRelations[];
  Block: BlockWithRelations[];
};

export type SectionWithRelations = Omit<z.infer<typeof SectionSchema>, "headingAnchor"> & {
  headingAnchor?: JsonValueType | null;
} & SectionRelations

export const SectionWithRelationsSchema: z.ZodType<SectionWithRelations> = SectionSchema.merge(z.object({
  document: z.lazy(() => DocumentWithRelationsSchema),
  parent: z.lazy(() => SectionWithRelationsSchema).nullish(),
  children: z.lazy(() => SectionWithRelationsSchema).array(),
  Block: z.lazy(() => BlockWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// SECTION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type SectionPartialRelations = {
  document?: DocumentPartialWithRelations;
  parent?: SectionPartialWithRelations | null;
  children?: SectionPartialWithRelations[];
  Block?: BlockPartialWithRelations[];
};

export type SectionPartialWithRelations = Omit<z.infer<typeof SectionPartialSchema>, "headingAnchor"> & {
  headingAnchor?: JsonValueType | null;
} & SectionPartialRelations

export const SectionPartialWithRelationsSchema: z.ZodType<SectionPartialWithRelations> = SectionPartialSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  parent: z.lazy(() => SectionPartialWithRelationsSchema).nullish(),
  children: z.lazy(() => SectionPartialWithRelationsSchema).array(),
  Block: z.lazy(() => BlockPartialWithRelationsSchema).array(),
})).partial()

export type SectionWithPartialRelations = Omit<z.infer<typeof SectionSchema>, "headingAnchor"> & {
  headingAnchor?: JsonValueType | null;
} & SectionPartialRelations

export const SectionWithPartialRelationsSchema: z.ZodType<SectionWithPartialRelations> = SectionSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  parent: z.lazy(() => SectionPartialWithRelationsSchema).nullish(),
  children: z.lazy(() => SectionPartialWithRelationsSchema).array(),
  Block: z.lazy(() => BlockPartialWithRelationsSchema).array(),
}).partial())

export default SectionSchema;
