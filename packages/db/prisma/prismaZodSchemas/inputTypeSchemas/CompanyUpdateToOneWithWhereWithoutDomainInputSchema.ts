import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { CompanyUpdateWithoutDomainInputSchema } from './CompanyUpdateWithoutDomainInputSchema';
import { CompanyUncheckedUpdateWithoutDomainInputSchema } from './CompanyUncheckedUpdateWithoutDomainInputSchema';

export const CompanyUpdateToOneWithWhereWithoutDomainInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutDomainInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutDomainInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutDomainInputSchema) ]),
}).strict() as z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutDomainInput>;

export default CompanyUpdateToOneWithWhereWithoutDomainInputSchema;
