import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema } from './CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema';
import { DomainUncheckedCreateNestedManyWithoutCompanyInputSchema } from './DomainUncheckedCreateNestedManyWithoutCompanyInputSchema';

export const CompanyUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutServiceInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().optional().nullable(),
  countryCode: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CompanyAlias: z.lazy(() => CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  Domain: z.lazy(() => DomainUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
});

export default CompanyUncheckedCreateWithoutServiceInputSchema;
