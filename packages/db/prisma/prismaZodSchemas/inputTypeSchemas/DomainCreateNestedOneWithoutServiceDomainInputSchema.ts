import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateWithoutServiceDomainInputSchema } from './DomainCreateWithoutServiceDomainInputSchema';
import { DomainUncheckedCreateWithoutServiceDomainInputSchema } from './DomainUncheckedCreateWithoutServiceDomainInputSchema';
import { DomainCreateOrConnectWithoutServiceDomainInputSchema } from './DomainCreateOrConnectWithoutServiceDomainInputSchema';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';

export const DomainCreateNestedOneWithoutServiceDomainInputSchema: z.ZodType<Prisma.DomainCreateNestedOneWithoutServiceDomainInput> = z.strictObject({
  create: z.union([ z.lazy(() => DomainCreateWithoutServiceDomainInputSchema), z.lazy(() => DomainUncheckedCreateWithoutServiceDomainInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DomainCreateOrConnectWithoutServiceDomainInputSchema).optional(),
  connect: z.lazy(() => DomainWhereUniqueInputSchema).optional(),
});

export default DomainCreateNestedOneWithoutServiceDomainInputSchema;
