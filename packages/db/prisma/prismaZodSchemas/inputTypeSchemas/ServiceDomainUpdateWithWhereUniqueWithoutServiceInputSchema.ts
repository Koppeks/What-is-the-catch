import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';
import { ServiceDomainUpdateWithoutServiceInputSchema } from './ServiceDomainUpdateWithoutServiceInputSchema';
import { ServiceDomainUncheckedUpdateWithoutServiceInputSchema } from './ServiceDomainUncheckedUpdateWithoutServiceInputSchema';

export const ServiceDomainUpdateWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainUpdateWithWhereUniqueWithoutServiceInput> = z.object({
  where: z.lazy(() => ServiceDomainWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServiceDomainUpdateWithoutServiceInputSchema),z.lazy(() => ServiceDomainUncheckedUpdateWithoutServiceInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateWithWhereUniqueWithoutServiceInput>;

export default ServiceDomainUpdateWithWhereUniqueWithoutServiceInputSchema;
