import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateWithoutServiceInputSchema } from './ServiceDomainCreateWithoutServiceInputSchema';
import { ServiceDomainUncheckedCreateWithoutServiceInputSchema } from './ServiceDomainUncheckedCreateWithoutServiceInputSchema';
import { ServiceDomainCreateOrConnectWithoutServiceInputSchema } from './ServiceDomainCreateOrConnectWithoutServiceInputSchema';
import { ServiceDomainCreateManyServiceInputEnvelopeSchema } from './ServiceDomainCreateManyServiceInputEnvelopeSchema';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';

export const ServiceDomainUncheckedCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainUncheckedCreateNestedManyWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => ServiceDomainCreateWithoutServiceInputSchema),z.lazy(() => ServiceDomainCreateWithoutServiceInputSchema).array(),z.lazy(() => ServiceDomainUncheckedCreateWithoutServiceInputSchema),z.lazy(() => ServiceDomainUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceDomainCreateOrConnectWithoutServiceInputSchema),z.lazy(() => ServiceDomainCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceDomainCreateManyServiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ServiceDomainUncheckedCreateNestedManyWithoutServiceInput>;

export default ServiceDomainUncheckedCreateNestedManyWithoutServiceInputSchema;
