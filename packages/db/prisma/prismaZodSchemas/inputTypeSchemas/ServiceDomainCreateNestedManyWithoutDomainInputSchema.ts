import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateWithoutDomainInputSchema } from './ServiceDomainCreateWithoutDomainInputSchema';
import { ServiceDomainUncheckedCreateWithoutDomainInputSchema } from './ServiceDomainUncheckedCreateWithoutDomainInputSchema';
import { ServiceDomainCreateOrConnectWithoutDomainInputSchema } from './ServiceDomainCreateOrConnectWithoutDomainInputSchema';
import { ServiceDomainCreateManyDomainInputEnvelopeSchema } from './ServiceDomainCreateManyDomainInputEnvelopeSchema';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';

export const ServiceDomainCreateNestedManyWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainCreateNestedManyWithoutDomainInput> = z.object({
  create: z.union([ z.lazy(() => ServiceDomainCreateWithoutDomainInputSchema),z.lazy(() => ServiceDomainCreateWithoutDomainInputSchema).array(),z.lazy(() => ServiceDomainUncheckedCreateWithoutDomainInputSchema),z.lazy(() => ServiceDomainUncheckedCreateWithoutDomainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceDomainCreateOrConnectWithoutDomainInputSchema),z.lazy(() => ServiceDomainCreateOrConnectWithoutDomainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceDomainCreateManyDomainInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceDomainWhereUniqueInputSchema),z.lazy(() => ServiceDomainWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ServiceDomainCreateNestedManyWithoutDomainInput>;

export default ServiceDomainCreateNestedManyWithoutDomainInputSchema;
