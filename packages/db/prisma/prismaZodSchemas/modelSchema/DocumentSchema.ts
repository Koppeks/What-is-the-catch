import { z } from 'zod';
import { DocumentKindSchema } from '../inputTypeSchemas/DocumentKindSchema'
import { TypeRequestSchema } from '../inputTypeSchemas/TypeRequestSchema'
import { AnalysisStatusSchema } from '../inputTypeSchemas/AnalysisStatusSchema'
import { AnalysisRunWithRelationsSchema, AnalysisRunPartialWithRelationsSchema } from './AnalysisRunSchema'
import type { AnalysisRunWithRelations, AnalysisRunPartialWithRelations } from './AnalysisRunSchema'
import { DocumentTriggerWithRelationsSchema, DocumentTriggerPartialWithRelationsSchema } from './DocumentTriggerSchema'
import type { DocumentTriggerWithRelations, DocumentTriggerPartialWithRelations } from './DocumentTriggerSchema'
import { SectionWithRelationsSchema, SectionPartialWithRelationsSchema } from './SectionSchema'
import type { SectionWithRelations, SectionPartialWithRelations } from './SectionSchema'
import { BlockWithRelationsSchema, BlockPartialWithRelationsSchema } from './BlockSchema'
import type { BlockWithRelations, BlockPartialWithRelations } from './BlockSchema'

/////////////////////////////////////////
// DOCUMENT SCHEMA
/////////////////////////////////////////

export const DocumentSchema = z.object({
  kind: DocumentKindSchema.nullish(),
  type: TypeRequestSchema,
  status: AnalysisStatusSchema,
  id: z.cuid(),
  name: z.string(),
  locale: z.string().nullish(),
  sourceUrl: z.string().nullish(),
  updatedAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type Document = z.infer<typeof DocumentSchema>

/////////////////////////////////////////
// DOCUMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const DocumentPartialSchema = DocumentSchema.partial()

export type DocumentPartial = z.infer<typeof DocumentPartialSchema>

/////////////////////////////////////////
// DOCUMENT RELATION SCHEMA
/////////////////////////////////////////

export type DocumentRelations = {
  runs: AnalysisRunWithRelations[];
  documentRules: DocumentTriggerWithRelations[];
  section: SectionWithRelations[];
  blocks: BlockWithRelations[];
};

export type DocumentWithRelations = z.infer<typeof DocumentSchema> & DocumentRelations

export const DocumentWithRelationsSchema: z.ZodType<DocumentWithRelations> = DocumentSchema.merge(z.object({
  runs: z.lazy(() => AnalysisRunWithRelationsSchema).array(),
  documentRules: z.lazy(() => DocumentTriggerWithRelationsSchema).array(),
  section: z.lazy(() => SectionWithRelationsSchema).array(),
  blocks: z.lazy(() => BlockWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// DOCUMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DocumentPartialRelations = {
  runs?: AnalysisRunPartialWithRelations[];
  documentRules?: DocumentTriggerPartialWithRelations[];
  section?: SectionPartialWithRelations[];
  blocks?: BlockPartialWithRelations[];
};

export type DocumentPartialWithRelations = z.infer<typeof DocumentPartialSchema> & DocumentPartialRelations

export const DocumentPartialWithRelationsSchema: z.ZodType<DocumentPartialWithRelations> = DocumentPartialSchema.merge(z.object({
  runs: z.lazy(() => AnalysisRunPartialWithRelationsSchema).array(),
  documentRules: z.lazy(() => DocumentTriggerPartialWithRelationsSchema).array(),
  section: z.lazy(() => SectionPartialWithRelationsSchema).array(),
  blocks: z.lazy(() => BlockPartialWithRelationsSchema).array(),
})).partial()

export type DocumentWithPartialRelations = z.infer<typeof DocumentSchema> & DocumentPartialRelations

export const DocumentWithPartialRelationsSchema: z.ZodType<DocumentWithPartialRelations> = DocumentSchema.merge(z.object({
  runs: z.lazy(() => AnalysisRunPartialWithRelationsSchema).array(),
  documentRules: z.lazy(() => DocumentTriggerPartialWithRelationsSchema).array(),
  section: z.lazy(() => SectionPartialWithRelationsSchema).array(),
  blocks: z.lazy(() => BlockPartialWithRelationsSchema).array(),
}).partial())

export default DocumentSchema;
