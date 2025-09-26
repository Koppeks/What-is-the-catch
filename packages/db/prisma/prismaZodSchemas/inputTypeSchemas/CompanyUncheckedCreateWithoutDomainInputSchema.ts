import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema } from './ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema';
import { CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema } from './CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema';

export const CompanyUncheckedCreateWithoutDomainInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutDomainInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().optional().nullable(),
  countryCode: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Service: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyAlias: z.lazy(() => CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyUncheckedCreateWithoutDomainInput>;

export default CompanyUncheckedCreateWithoutDomainInputSchema;
