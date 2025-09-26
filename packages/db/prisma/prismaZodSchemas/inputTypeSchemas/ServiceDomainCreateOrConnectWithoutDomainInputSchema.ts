import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';
import { ServiceDomainCreateWithoutDomainInputSchema } from './ServiceDomainCreateWithoutDomainInputSchema';
import { ServiceDomainUncheckedCreateWithoutDomainInputSchema } from './ServiceDomainUncheckedCreateWithoutDomainInputSchema';

export const ServiceDomainCreateOrConnectWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainCreateOrConnectWithoutDomainInput> = z.object({
  where: z.lazy(() => ServiceDomainWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceDomainCreateWithoutDomainInputSchema),z.lazy(() => ServiceDomainUncheckedCreateWithoutDomainInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceDomainCreateOrConnectWithoutDomainInput>;

export default ServiceDomainCreateOrConnectWithoutDomainInputSchema;
