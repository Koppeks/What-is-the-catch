import { z } from 'zod';

export const CompanyAliasScalarFieldEnumSchema = z.enum(['id','companyId','kind','value','valueNorm','createdAt','updatedAt']);

export default CompanyAliasScalarFieldEnumSchema;
