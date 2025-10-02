import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateWithoutServiceDomainInputSchema } from './ServiceCreateWithoutServiceDomainInputSchema';
import { ServiceUncheckedCreateWithoutServiceDomainInputSchema } from './ServiceUncheckedCreateWithoutServiceDomainInputSchema';
import { ServiceCreateOrConnectWithoutServiceDomainInputSchema } from './ServiceCreateOrConnectWithoutServiceDomainInputSchema';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';

export const ServiceCreateNestedOneWithoutServiceDomainInputSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutServiceDomainInput> = z.strictObject({
  create: z.union([ z.lazy(() => ServiceCreateWithoutServiceDomainInputSchema), z.lazy(() => ServiceUncheckedCreateWithoutServiceDomainInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutServiceDomainInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional(),
});

export default ServiceCreateNestedOneWithoutServiceDomainInputSchema;
