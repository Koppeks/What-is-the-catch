import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceUpdateWithoutServiceDomainInputSchema } from './ServiceUpdateWithoutServiceDomainInputSchema';
import { ServiceUncheckedUpdateWithoutServiceDomainInputSchema } from './ServiceUncheckedUpdateWithoutServiceDomainInputSchema';
import { ServiceCreateWithoutServiceDomainInputSchema } from './ServiceCreateWithoutServiceDomainInputSchema';
import { ServiceUncheckedCreateWithoutServiceDomainInputSchema } from './ServiceUncheckedCreateWithoutServiceDomainInputSchema';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';

export const ServiceUpsertWithoutServiceDomainInputSchema: z.ZodType<Prisma.ServiceUpsertWithoutServiceDomainInput> = z.strictObject({
  update: z.union([ z.lazy(() => ServiceUpdateWithoutServiceDomainInputSchema), z.lazy(() => ServiceUncheckedUpdateWithoutServiceDomainInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceCreateWithoutServiceDomainInputSchema), z.lazy(() => ServiceUncheckedCreateWithoutServiceDomainInputSchema) ]),
  where: z.lazy(() => ServiceWhereInputSchema).optional(),
});

export default ServiceUpsertWithoutServiceDomainInputSchema;
