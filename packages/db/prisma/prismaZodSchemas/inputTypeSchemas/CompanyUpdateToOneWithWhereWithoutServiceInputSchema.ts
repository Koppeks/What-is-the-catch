import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { CompanyUpdateWithoutServiceInputSchema } from './CompanyUpdateWithoutServiceInputSchema';
import { CompanyUncheckedUpdateWithoutServiceInputSchema } from './CompanyUncheckedUpdateWithoutServiceInputSchema';

export const CompanyUpdateToOneWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutServiceInput> = z.strictObject({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutServiceInputSchema), z.lazy(() => CompanyUncheckedUpdateWithoutServiceInputSchema) ]),
});

export default CompanyUpdateToOneWithWhereWithoutServiceInputSchema;
