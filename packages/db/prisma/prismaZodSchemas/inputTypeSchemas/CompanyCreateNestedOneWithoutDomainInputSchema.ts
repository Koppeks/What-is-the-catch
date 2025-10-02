import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateWithoutDomainInputSchema } from './CompanyCreateWithoutDomainInputSchema';
import { CompanyUncheckedCreateWithoutDomainInputSchema } from './CompanyUncheckedCreateWithoutDomainInputSchema';
import { CompanyCreateOrConnectWithoutDomainInputSchema } from './CompanyCreateOrConnectWithoutDomainInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyCreateNestedOneWithoutDomainInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutDomainInput> = z.strictObject({
  create: z.union([ z.lazy(() => CompanyCreateWithoutDomainInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutDomainInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutDomainInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
});

export default CompanyCreateNestedOneWithoutDomainInputSchema;
