import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema } from './ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema';
import { DomainUncheckedCreateNestedManyWithoutCompanyInputSchema } from './DomainUncheckedCreateNestedManyWithoutCompanyInputSchema';

export const CompanyUncheckedCreateWithoutCompanyAliasInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutCompanyAliasInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  displayName: z.string(),
  websiteUrl: z.string().optional().nullable(),
  countryCode: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Service: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  Domain: z.lazy(() => DomainUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
});

export default CompanyUncheckedCreateWithoutCompanyAliasInputSchema;
