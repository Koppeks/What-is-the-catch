import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';
import { ServiceDomainCreateWithoutServiceInputSchema } from './ServiceDomainCreateWithoutServiceInputSchema';
import { ServiceDomainUncheckedCreateWithoutServiceInputSchema } from './ServiceDomainUncheckedCreateWithoutServiceInputSchema';

export const ServiceDomainCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainCreateOrConnectWithoutServiceInput> = z.object({
  where: z.lazy(() => ServiceDomainWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceDomainCreateWithoutServiceInputSchema),z.lazy(() => ServiceDomainUncheckedCreateWithoutServiceInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceDomainCreateOrConnectWithoutServiceInput>;

export default ServiceDomainCreateOrConnectWithoutServiceInputSchema;
