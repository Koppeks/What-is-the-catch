import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { CompanyUpdateWithoutDomainInputSchema } from './CompanyUpdateWithoutDomainInputSchema';
import { CompanyUncheckedUpdateWithoutDomainInputSchema } from './CompanyUncheckedUpdateWithoutDomainInputSchema';

export const CompanyUpdateToOneWithWhereWithoutDomainInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutDomainInput> = z.strictObject({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutDomainInputSchema), z.lazy(() => CompanyUncheckedUpdateWithoutDomainInputSchema) ]),
});

export default CompanyUpdateToOneWithWhereWithoutDomainInputSchema;
