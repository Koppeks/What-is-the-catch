import { z } from 'zod';
import { CompanyWithRelationsSchema, CompanyPartialWithRelationsSchema } from './CompanySchema'
import type { CompanyWithRelations, CompanyPartialWithRelations } from './CompanySchema'
import { ServiceDomainWithRelationsSchema, ServiceDomainPartialWithRelationsSchema } from './ServiceDomainSchema'
import type { ServiceDomainWithRelations, ServiceDomainPartialWithRelations } from './ServiceDomainSchema'

/////////////////////////////////////////
// SERVICE SCHEMA
/////////////////////////////////////////

export const ServiceSchema = z.object({
  id: z.string().cuid(),
  companyId: z.string(),
  slug: z.string(),
  name: z.string(),
  note: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Service = z.infer<typeof ServiceSchema>

/////////////////////////////////////////
// SERVICE PARTIAL SCHEMA
/////////////////////////////////////////

export const ServicePartialSchema = ServiceSchema.partial()

export type ServicePartial = z.infer<typeof ServicePartialSchema>

/////////////////////////////////////////
// SERVICE RELATION SCHEMA
/////////////////////////////////////////

export type ServiceRelations = {
  company: CompanyWithRelations;
  ServiceDomain: ServiceDomainWithRelations[];
};

export type ServiceWithRelations = z.infer<typeof ServiceSchema> & ServiceRelations

export const ServiceWithRelationsSchema: z.ZodType<ServiceWithRelations> = ServiceSchema.merge(z.object({
  company: z.lazy(() => CompanyWithRelationsSchema),
  ServiceDomain: z.lazy(() => ServiceDomainWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// SERVICE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ServicePartialRelations = {
  company?: CompanyPartialWithRelations;
  ServiceDomain?: ServiceDomainPartialWithRelations[];
};

export type ServicePartialWithRelations = z.infer<typeof ServicePartialSchema> & ServicePartialRelations

export const ServicePartialWithRelationsSchema: z.ZodType<ServicePartialWithRelations> = ServicePartialSchema.merge(z.object({
  company: z.lazy(() => CompanyPartialWithRelationsSchema),
  ServiceDomain: z.lazy(() => ServiceDomainPartialWithRelationsSchema).array(),
})).partial()

export type ServiceWithPartialRelations = z.infer<typeof ServiceSchema> & ServicePartialRelations

export const ServiceWithPartialRelationsSchema: z.ZodType<ServiceWithPartialRelations> = ServiceSchema.merge(z.object({
  company: z.lazy(() => CompanyPartialWithRelationsSchema),
  ServiceDomain: z.lazy(() => ServiceDomainPartialWithRelationsSchema).array(),
}).partial())

export default ServiceSchema;
