import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateWithoutServiceInputSchema } from './CompanyCreateWithoutServiceInputSchema';
import { CompanyUncheckedCreateWithoutServiceInputSchema } from './CompanyUncheckedCreateWithoutServiceInputSchema';
import { CompanyCreateOrConnectWithoutServiceInputSchema } from './CompanyCreateOrConnectWithoutServiceInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyCreateNestedOneWithoutServiceInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutServiceInput> = z.strictObject({
  create: z.union([ z.lazy(() => CompanyCreateWithoutServiceInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutServiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutServiceInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
});

export default CompanyCreateNestedOneWithoutServiceInputSchema;
