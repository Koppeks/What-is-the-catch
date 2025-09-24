import { z } from 'zod';

export const DomainScalarFieldEnumSchema = z.enum(['id','companyId','host','note','createdAt','updatedAt']);

export default DomainScalarFieldEnumSchema;
