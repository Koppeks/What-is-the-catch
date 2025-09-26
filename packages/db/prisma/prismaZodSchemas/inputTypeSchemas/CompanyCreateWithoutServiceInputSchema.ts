import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasCreateNestedManyWithoutCompanyInputSchema } from './CompanyAliasCreateNestedManyWithoutCompanyInputSchema';
import { DomainCreateNestedManyWithoutCompanyInputSchema } from './DomainCreateNestedManyWithoutCompanyInputSchema';

export const CompanyCreateWithoutServiceInputSchema: z.ZodType<Prisma.CompanyCreateWithoutServiceInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().optional().nullable(),
  countryCode: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CompanyAlias: z.lazy(() => CompanyAliasCreateNestedManyWithoutCompanyInputSchema).optional(),
  Domain: z.lazy(() => DomainCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyCreateWithoutServiceInput>;

export default CompanyCreateWithoutServiceInputSchema;
