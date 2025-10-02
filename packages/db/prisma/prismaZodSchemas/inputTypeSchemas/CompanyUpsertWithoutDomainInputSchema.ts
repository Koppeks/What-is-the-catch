import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyUpdateWithoutDomainInputSchema } from './CompanyUpdateWithoutDomainInputSchema';
import { CompanyUncheckedUpdateWithoutDomainInputSchema } from './CompanyUncheckedUpdateWithoutDomainInputSchema';
import { CompanyCreateWithoutDomainInputSchema } from './CompanyCreateWithoutDomainInputSchema';
import { CompanyUncheckedCreateWithoutDomainInputSchema } from './CompanyUncheckedCreateWithoutDomainInputSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyUpsertWithoutDomainInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutDomainInput> = z.strictObject({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutDomainInputSchema), z.lazy(() => CompanyUncheckedUpdateWithoutDomainInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutDomainInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutDomainInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
});

export default CompanyUpsertWithoutDomainInputSchema;
