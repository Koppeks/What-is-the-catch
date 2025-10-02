import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyUpdateWithoutServiceInputSchema } from './CompanyUpdateWithoutServiceInputSchema';
import { CompanyUncheckedUpdateWithoutServiceInputSchema } from './CompanyUncheckedUpdateWithoutServiceInputSchema';
import { CompanyCreateWithoutServiceInputSchema } from './CompanyCreateWithoutServiceInputSchema';
import { CompanyUncheckedCreateWithoutServiceInputSchema } from './CompanyUncheckedCreateWithoutServiceInputSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyUpsertWithoutServiceInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutServiceInput> = z.strictObject({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutServiceInputSchema), z.lazy(() => CompanyUncheckedUpdateWithoutServiceInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutServiceInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutServiceInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
});

export default CompanyUpsertWithoutServiceInputSchema;
