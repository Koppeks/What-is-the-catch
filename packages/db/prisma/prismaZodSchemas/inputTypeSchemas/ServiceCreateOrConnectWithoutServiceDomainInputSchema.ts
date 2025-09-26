import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';
import { ServiceCreateWithoutServiceDomainInputSchema } from './ServiceCreateWithoutServiceDomainInputSchema';
import { ServiceUncheckedCreateWithoutServiceDomainInputSchema } from './ServiceUncheckedCreateWithoutServiceDomainInputSchema';

export const ServiceCreateOrConnectWithoutServiceDomainInputSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutServiceDomainInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceCreateWithoutServiceDomainInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutServiceDomainInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceCreateOrConnectWithoutServiceDomainInput>;

export default ServiceCreateOrConnectWithoutServiceDomainInputSchema;
