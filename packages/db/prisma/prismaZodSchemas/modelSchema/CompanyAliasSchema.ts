import { z } from 'zod';
import { AliasKindSchema } from '../inputTypeSchemas/AliasKindSchema'
import { CompanyWithRelationsSchema, CompanyPartialWithRelationsSchema } from './CompanySchema'
import type { CompanyWithRelations, CompanyPartialWithRelations } from './CompanySchema'

/////////////////////////////////////////
// COMPANY ALIAS SCHEMA
/////////////////////////////////////////

export const CompanyAliasSchema = z.object({
  kind: AliasKindSchema,
  id: z.cuid(),
  companyId: z.string(),
  value: z.string(),
  valueNorm: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CompanyAlias = z.infer<typeof CompanyAliasSchema>

/////////////////////////////////////////
// COMPANY ALIAS PARTIAL SCHEMA
/////////////////////////////////////////

export const CompanyAliasPartialSchema = CompanyAliasSchema.partial()

export type CompanyAliasPartial = z.infer<typeof CompanyAliasPartialSchema>

/////////////////////////////////////////
// COMPANY ALIAS RELATION SCHEMA
/////////////////////////////////////////

export type CompanyAliasRelations = {
  company: CompanyWithRelations;
};

export type CompanyAliasWithRelations = z.infer<typeof CompanyAliasSchema> & CompanyAliasRelations

export const CompanyAliasWithRelationsSchema: z.ZodType<CompanyAliasWithRelations> = CompanyAliasSchema.merge(z.object({
  company: z.lazy(() => CompanyWithRelationsSchema),
}))

/////////////////////////////////////////
// COMPANY ALIAS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CompanyAliasPartialRelations = {
  company?: CompanyPartialWithRelations;
};

export type CompanyAliasPartialWithRelations = z.infer<typeof CompanyAliasPartialSchema> & CompanyAliasPartialRelations

export const CompanyAliasPartialWithRelationsSchema: z.ZodType<CompanyAliasPartialWithRelations> = CompanyAliasPartialSchema.merge(z.object({
  company: z.lazy(() => CompanyPartialWithRelationsSchema),
})).partial()

export type CompanyAliasWithPartialRelations = z.infer<typeof CompanyAliasSchema> & CompanyAliasPartialRelations

export const CompanyAliasWithPartialRelationsSchema: z.ZodType<CompanyAliasWithPartialRelations> = CompanyAliasSchema.merge(z.object({
  company: z.lazy(() => CompanyPartialWithRelationsSchema),
}).partial())

export default CompanyAliasSchema;
