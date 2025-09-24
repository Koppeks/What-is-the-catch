import { z } from 'zod';

export const ServiceScalarFieldEnumSchema = z.enum(['id','companyId','slug','name','note','createdAt','updatedAt']);

export default ServiceScalarFieldEnumSchema;
