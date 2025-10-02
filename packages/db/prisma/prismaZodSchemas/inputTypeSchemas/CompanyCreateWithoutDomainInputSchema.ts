import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateNestedManyWithoutCompanyInputSchema } from './ServiceCreateNestedManyWithoutCompanyInputSchema';
import { CompanyAliasCreateNestedManyWithoutCompanyInputSchema } from './CompanyAliasCreateNestedManyWithoutCompanyInputSchema';

export const CompanyCreateWithoutDomainInputSchema: z.ZodType<Prisma.CompanyCreateWithoutDomainInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().optional().nullable(),
  countryCode: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Service: z.lazy(() => ServiceCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyAlias: z.lazy(() => CompanyAliasCreateNestedManyWithoutCompanyInputSchema).optional(),
});

export default CompanyCreateWithoutDomainInputSchema;
