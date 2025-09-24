import { z } from 'zod';
import { ServiceWithRelationsSchema, ServicePartialWithRelationsSchema } from './ServiceSchema'
import type { ServiceWithRelations, ServicePartialWithRelations } from './ServiceSchema'
import { CompanyAliasWithRelationsSchema, CompanyAliasPartialWithRelationsSchema } from './CompanyAliasSchema'
import type { CompanyAliasWithRelations, CompanyAliasPartialWithRelations } from './CompanyAliasSchema'
import { DomainWithRelationsSchema, DomainPartialWithRelationsSchema } from './DomainSchema'
import type { DomainWithRelations, DomainPartialWithRelations } from './DomainSchema'

/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////

export const CompanySchema = z.object({
  id: z.string().cuid(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().nullish(),
  countryCode: z.string().nullish(),
  description: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Company = z.infer<typeof CompanySchema>

/////////////////////////////////////////
// COMPANY PARTIAL SCHEMA
/////////////////////////////////////////

export const CompanyPartialSchema = CompanySchema.partial()

export type CompanyPartial = z.infer<typeof CompanyPartialSchema>

/////////////////////////////////////////
// COMPANY RELATION SCHEMA
/////////////////////////////////////////

export type CompanyRelations = {
  Service: ServiceWithRelations[];
  CompanyAlias: CompanyAliasWithRelations[];
  Domain: DomainWithRelations[];
};

export type CompanyWithRelations = z.infer<typeof CompanySchema> & CompanyRelations

export const CompanyWithRelationsSchema: z.ZodType<CompanyWithRelations> = CompanySchema.merge(z.object({
  Service: z.lazy(() => ServiceWithRelationsSchema).array(),
  CompanyAlias: z.lazy(() => CompanyAliasWithRelationsSchema).array(),
  Domain: z.lazy(() => DomainWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// COMPANY PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CompanyPartialRelations = {
  Service?: ServicePartialWithRelations[];
  CompanyAlias?: CompanyAliasPartialWithRelations[];
  Domain?: DomainPartialWithRelations[];
};

export type CompanyPartialWithRelations = z.infer<typeof CompanyPartialSchema> & CompanyPartialRelations

export const CompanyPartialWithRelationsSchema: z.ZodType<CompanyPartialWithRelations> = CompanyPartialSchema.merge(z.object({
  Service: z.lazy(() => ServicePartialWithRelationsSchema).array(),
  CompanyAlias: z.lazy(() => CompanyAliasPartialWithRelationsSchema).array(),
  Domain: z.lazy(() => DomainPartialWithRelationsSchema).array(),
})).partial()

export type CompanyWithPartialRelations = z.infer<typeof CompanySchema> & CompanyPartialRelations

export const CompanyWithPartialRelationsSchema: z.ZodType<CompanyWithPartialRelations> = CompanySchema.merge(z.object({
  Service: z.lazy(() => ServicePartialWithRelationsSchema).array(),
  CompanyAlias: z.lazy(() => CompanyAliasPartialWithRelationsSchema).array(),
  Domain: z.lazy(() => DomainPartialWithRelationsSchema).array(),
}).partial())

export default CompanySchema;
