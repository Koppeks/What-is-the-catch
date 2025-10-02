import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateWithoutServiceDomainInputSchema } from './ServiceCreateWithoutServiceDomainInputSchema';
import { ServiceUncheckedCreateWithoutServiceDomainInputSchema } from './ServiceUncheckedCreateWithoutServiceDomainInputSchema';
import { ServiceCreateOrConnectWithoutServiceDomainInputSchema } from './ServiceCreateOrConnectWithoutServiceDomainInputSchema';
import { ServiceUpsertWithoutServiceDomainInputSchema } from './ServiceUpsertWithoutServiceDomainInputSchema';
import { ServiceWhereUniqueInputSchema } from './ServiceWhereUniqueInputSchema';
import { ServiceUpdateToOneWithWhereWithoutServiceDomainInputSchema } from './ServiceUpdateToOneWithWhereWithoutServiceDomainInputSchema';
import { ServiceUpdateWithoutServiceDomainInputSchema } from './ServiceUpdateWithoutServiceDomainInputSchema';
import { ServiceUncheckedUpdateWithoutServiceDomainInputSchema } from './ServiceUncheckedUpdateWithoutServiceDomainInputSchema';

export const ServiceUpdateOneRequiredWithoutServiceDomainNestedInputSchema: z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutServiceDomainNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ServiceCreateWithoutServiceDomainInputSchema), z.lazy(() => ServiceUncheckedCreateWithoutServiceDomainInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutServiceDomainInputSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutServiceDomainInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateToOneWithWhereWithoutServiceDomainInputSchema), z.lazy(() => ServiceUpdateWithoutServiceDomainInputSchema), z.lazy(() => ServiceUncheckedUpdateWithoutServiceDomainInputSchema) ]).optional(),
});

export default ServiceUpdateOneRequiredWithoutServiceDomainNestedInputSchema;
