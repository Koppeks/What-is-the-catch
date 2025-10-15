import { z } from 'zod';
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
  headingBlockId: z.string(),
  parentId: z.string().nullish(),
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
  headingBlock: BlockWithRelations;
  parent?: SectionWithRelations | null;
  children: SectionWithRelations[];
  Block: BlockWithRelations[];
};

export type SectionWithRelations = z.infer<typeof SectionSchema> & SectionRelations

export const SectionWithRelationsSchema: z.ZodType<SectionWithRelations> = SectionSchema.merge(z.object({
  document: z.lazy(() => DocumentWithRelationsSchema),
  headingBlock: z.lazy(() => BlockWithRelationsSchema),
  parent: z.lazy(() => SectionWithRelationsSchema).nullish(),
  children: z.lazy(() => SectionWithRelationsSchema).array(),
  Block: z.lazy(() => BlockWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// SECTION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type SectionPartialRelations = {
  document?: DocumentPartialWithRelations;
  headingBlock?: BlockPartialWithRelations;
  parent?: SectionPartialWithRelations | null;
  children?: SectionPartialWithRelations[];
  Block?: BlockPartialWithRelations[];
};

export type SectionPartialWithRelations = z.infer<typeof SectionPartialSchema> & SectionPartialRelations

export const SectionPartialWithRelationsSchema: z.ZodType<SectionPartialWithRelations> = SectionPartialSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  headingBlock: z.lazy(() => BlockPartialWithRelationsSchema),
  parent: z.lazy(() => SectionPartialWithRelationsSchema).nullish(),
  children: z.lazy(() => SectionPartialWithRelationsSchema).array(),
  Block: z.lazy(() => BlockPartialWithRelationsSchema).array(),
})).partial()

export type SectionWithPartialRelations = z.infer<typeof SectionSchema> & SectionPartialRelations

export const SectionWithPartialRelationsSchema: z.ZodType<SectionWithPartialRelations> = SectionSchema.merge(z.object({
  document: z.lazy(() => DocumentPartialWithRelationsSchema),
  headingBlock: z.lazy(() => BlockPartialWithRelationsSchema),
  parent: z.lazy(() => SectionPartialWithRelationsSchema).nullish(),
  children: z.lazy(() => SectionPartialWithRelationsSchema).array(),
  Block: z.lazy(() => BlockPartialWithRelationsSchema).array(),
}).partial())

export default SectionSchema;
