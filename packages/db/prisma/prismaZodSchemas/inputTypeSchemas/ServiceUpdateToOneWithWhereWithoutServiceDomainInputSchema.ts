import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';
import { ServiceUpdateWithoutServiceDomainInputSchema } from './ServiceUpdateWithoutServiceDomainInputSchema';
import { ServiceUncheckedUpdateWithoutServiceDomainInputSchema } from './ServiceUncheckedUpdateWithoutServiceDomainInputSchema';

export const ServiceUpdateToOneWithWhereWithoutServiceDomainInputSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutServiceDomainInput> = z.object({
  where: z.lazy(() => ServiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutServiceDomainInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutServiceDomainInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutServiceDomainInput>;

export default ServiceUpdateToOneWithWhereWithoutServiceDomainInputSchema;
