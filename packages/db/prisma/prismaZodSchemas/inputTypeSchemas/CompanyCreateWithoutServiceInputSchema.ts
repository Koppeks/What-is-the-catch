import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasCreateNestedManyWithoutCompanyInputSchema } from './CompanyAliasCreateNestedManyWithoutCompanyInputSchema';
import { DomainCreateNestedManyWithoutCompanyInputSchema } from './DomainCreateNestedManyWithoutCompanyInputSchema';

export const CompanyCreateWithoutServiceInputSchema: z.ZodType<Prisma.CompanyCreateWithoutServiceInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().optional().nullable(),
  countryCode: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CompanyAlias: z.lazy(() => CompanyAliasCreateNestedManyWithoutCompanyInputSchema).optional(),
  Domain: z.lazy(() => DomainCreateNestedManyWithoutCompanyInputSchema).optional(),
});

export default CompanyCreateWithoutServiceInputSchema;
