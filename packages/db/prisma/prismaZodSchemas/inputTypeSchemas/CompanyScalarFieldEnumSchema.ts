import { z } from 'zod';

export const CompanyScalarFieldEnumSchema = z.enum(['id','slug','displayName','websiteUrl','countryCode','description','createdAt','updatedAt']);

export default CompanyScalarFieldEnumSchema;
