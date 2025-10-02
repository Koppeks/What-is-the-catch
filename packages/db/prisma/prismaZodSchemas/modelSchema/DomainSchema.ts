import { z } from 'zod';
import { CompanyWithRelationsSchema, CompanyPartialWithRelationsSchema } from './CompanySchema'
import type { CompanyWithRelations, CompanyPartialWithRelations } from './CompanySchema'
import { ServiceDomainWithRelationsSchema, ServiceDomainPartialWithRelationsSchema } from './ServiceDomainSchema'
import type { ServiceDomainWithRelations, ServiceDomainPartialWithRelations } from './ServiceDomainSchema'

/////////////////////////////////////////
// DOMAIN SCHEMA
/////////////////////////////////////////

export const DomainSchema = z.object({
  id: z.cuid(),
  companyId: z.string(),
  host: z.string(),
  note: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Domain = z.infer<typeof DomainSchema>

/////////////////////////////////////////
// DOMAIN PARTIAL SCHEMA
/////////////////////////////////////////

export const DomainPartialSchema = DomainSchema.partial()

export type DomainPartial = z.infer<typeof DomainPartialSchema>

/////////////////////////////////////////
// DOMAIN RELATION SCHEMA
/////////////////////////////////////////

export type DomainRelations = {
  company: CompanyWithRelations;
  ServiceDomain: ServiceDomainWithRelations[];
};

export type DomainWithRelations = z.infer<typeof DomainSchema> & DomainRelations

export const DomainWithRelationsSchema: z.ZodType<DomainWithRelations> = DomainSchema.merge(z.object({
  company: z.lazy(() => CompanyWithRelationsSchema),
  ServiceDomain: z.lazy(() => ServiceDomainWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// DOMAIN PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DomainPartialRelations = {
  company?: CompanyPartialWithRelations;
  ServiceDomain?: ServiceDomainPartialWithRelations[];
};

export type DomainPartialWithRelations = z.infer<typeof DomainPartialSchema> & DomainPartialRelations

export const DomainPartialWithRelationsSchema: z.ZodType<DomainPartialWithRelations> = DomainPartialSchema.merge(z.object({
  company: z.lazy(() => CompanyPartialWithRelationsSchema),
  ServiceDomain: z.lazy(() => ServiceDomainPartialWithRelationsSchema).array(),
})).partial()

export type DomainWithPartialRelations = z.infer<typeof DomainSchema> & DomainPartialRelations

export const DomainWithPartialRelationsSchema: z.ZodType<DomainWithPartialRelations> = DomainSchema.merge(z.object({
  company: z.lazy(() => CompanyPartialWithRelationsSchema),
  ServiceDomain: z.lazy(() => ServiceDomainPartialWithRelationsSchema).array(),
}).partial())

export default DomainSchema;
