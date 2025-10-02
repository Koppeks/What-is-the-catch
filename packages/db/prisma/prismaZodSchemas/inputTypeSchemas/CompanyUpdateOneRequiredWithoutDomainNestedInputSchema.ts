import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateWithoutDomainInputSchema } from './CompanyCreateWithoutDomainInputSchema';
import { CompanyUncheckedCreateWithoutDomainInputSchema } from './CompanyUncheckedCreateWithoutDomainInputSchema';
import { CompanyCreateOrConnectWithoutDomainInputSchema } from './CompanyCreateOrConnectWithoutDomainInputSchema';
import { CompanyUpsertWithoutDomainInputSchema } from './CompanyUpsertWithoutDomainInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';
import { CompanyUpdateToOneWithWhereWithoutDomainInputSchema } from './CompanyUpdateToOneWithWhereWithoutDomainInputSchema';
import { CompanyUpdateWithoutDomainInputSchema } from './CompanyUpdateWithoutDomainInputSchema';
import { CompanyUncheckedUpdateWithoutDomainInputSchema } from './CompanyUncheckedUpdateWithoutDomainInputSchema';

export const CompanyUpdateOneRequiredWithoutDomainNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutDomainNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CompanyCreateWithoutDomainInputSchema), z.lazy(() => CompanyUncheckedCreateWithoutDomainInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutDomainInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutDomainInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutDomainInputSchema), z.lazy(() => CompanyUpdateWithoutDomainInputSchema), z.lazy(() => CompanyUncheckedUpdateWithoutDomainInputSchema) ]).optional(),
});

export default CompanyUpdateOneRequiredWithoutDomainNestedInputSchema;
