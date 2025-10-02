import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';
import { CompanyCreateWithoutDomainInputSchema } from './CompanyCreateWithoutDomainInputSchema';
import { CompanyUncheckedCreateWithoutDomainInputSchema } from './CompanyUncheckedCreateWithoutDomainInputSchema';

export const CompanyCreateOrConnectWithoutDomainInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutDomainInput> = z.strictObject({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutDomainInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutDomainInputSchema) ]),
});

export default CompanyCreateOrConnectWithoutDomainInputSchema;
