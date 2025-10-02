import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';
import { CompanyCreateWithoutServiceInputSchema } from './CompanyCreateWithoutServiceInputSchema';
import { CompanyUncheckedCreateWithoutServiceInputSchema } from './CompanyUncheckedCreateWithoutServiceInputSchema';

export const CompanyCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutServiceInput> = z.strictObject({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutServiceInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutServiceInputSchema) ]),
});

export default CompanyCreateOrConnectWithoutServiceInputSchema;
