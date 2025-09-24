import { z } from 'zod';

export const ServiceDomainScalarFieldEnumSchema = z.enum(['id','serviceId','domainId','pathPattern']);

export default ServiceDomainScalarFieldEnumSchema;
