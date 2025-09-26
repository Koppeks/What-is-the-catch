import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { CompanyUpdateWithoutServiceInputSchema } from './CompanyUpdateWithoutServiceInputSchema';
import { CompanyUncheckedUpdateWithoutServiceInputSchema } from './CompanyUncheckedUpdateWithoutServiceInputSchema';

export const CompanyUpdateToOneWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutServiceInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutServiceInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutServiceInputSchema) ]),
}).strict() as z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutServiceInput>;

export default CompanyUpdateToOneWithWhereWithoutServiceInputSchema;
