import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema } from './ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema';
import { CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema } from './CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema';
import { DomainUncheckedCreateNestedManyWithoutCompanyInputSchema } from './DomainUncheckedCreateNestedManyWithoutCompanyInputSchema';

export const CompanyUncheckedCreateInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().optional().nullable(),
  countryCode: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Service: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyAlias: z.lazy(() => CompanyAliasUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  Domain: z.lazy(() => DomainUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyUncheckedCreateInput>;

export default CompanyUncheckedCreateInputSchema;
