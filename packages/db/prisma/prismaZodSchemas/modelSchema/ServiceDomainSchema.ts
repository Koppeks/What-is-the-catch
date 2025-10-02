import { z } from 'zod';
import { ServiceWithRelationsSchema, ServicePartialWithRelationsSchema } from './ServiceSchema'
import type { ServiceWithRelations, ServicePartialWithRelations } from './ServiceSchema'
import { DomainWithRelationsSchema, DomainPartialWithRelationsSchema } from './DomainSchema'
import type { DomainWithRelations, DomainPartialWithRelations } from './DomainSchema'

/////////////////////////////////////////
// SERVICE DOMAIN SCHEMA
/////////////////////////////////////////

export const ServiceDomainSchema = z.object({
  id: z.cuid(),
  serviceId: z.string(),
  domainId: z.string(),
  pathPattern: z.string().nullish(),
})

export type ServiceDomain = z.infer<typeof ServiceDomainSchema>

/////////////////////////////////////////
// SERVICE DOMAIN PARTIAL SCHEMA
/////////////////////////////////////////

export const ServiceDomainPartialSchema = ServiceDomainSchema.partial()

export type ServiceDomainPartial = z.infer<typeof ServiceDomainPartialSchema>

/////////////////////////////////////////
// SERVICE DOMAIN RELATION SCHEMA
/////////////////////////////////////////

export type ServiceDomainRelations = {
  service: ServiceWithRelations;
  domain: DomainWithRelations;
};

export type ServiceDomainWithRelations = z.infer<typeof ServiceDomainSchema> & ServiceDomainRelations

export const ServiceDomainWithRelationsSchema: z.ZodType<ServiceDomainWithRelations> = ServiceDomainSchema.merge(z.object({
  service: z.lazy(() => ServiceWithRelationsSchema),
  domain: z.lazy(() => DomainWithRelationsSchema),
}))

/////////////////////////////////////////
// SERVICE DOMAIN PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ServiceDomainPartialRelations = {
  service?: ServicePartialWithRelations;
  domain?: DomainPartialWithRelations;
};

export type ServiceDomainPartialWithRelations = z.infer<typeof ServiceDomainPartialSchema> & ServiceDomainPartialRelations

export const ServiceDomainPartialWithRelationsSchema: z.ZodType<ServiceDomainPartialWithRelations> = ServiceDomainPartialSchema.merge(z.object({
  service: z.lazy(() => ServicePartialWithRelationsSchema),
  domain: z.lazy(() => DomainPartialWithRelationsSchema),
})).partial()

export type ServiceDomainWithPartialRelations = z.infer<typeof ServiceDomainSchema> & ServiceDomainPartialRelations

export const ServiceDomainWithPartialRelationsSchema: z.ZodType<ServiceDomainWithPartialRelations> = ServiceDomainSchema.merge(z.object({
  service: z.lazy(() => ServicePartialWithRelationsSchema),
  domain: z.lazy(() => DomainPartialWithRelationsSchema),
}).partial())

export default ServiceDomainSchema;
