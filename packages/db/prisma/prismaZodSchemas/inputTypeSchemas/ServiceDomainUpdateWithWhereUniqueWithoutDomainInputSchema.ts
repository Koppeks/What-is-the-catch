import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainWhereUniqueInputSchema } from './ServiceDomainWhereUniqueInputSchema';
import { ServiceDomainUpdateWithoutDomainInputSchema } from './ServiceDomainUpdateWithoutDomainInputSchema';
import { ServiceDomainUncheckedUpdateWithoutDomainInputSchema } from './ServiceDomainUncheckedUpdateWithoutDomainInputSchema';

export const ServiceDomainUpdateWithWhereUniqueWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainUpdateWithWhereUniqueWithoutDomainInput> = z.object({
  where: z.lazy(() => ServiceDomainWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServiceDomainUpdateWithoutDomainInputSchema),z.lazy(() => ServiceDomainUncheckedUpdateWithoutDomainInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateWithWhereUniqueWithoutDomainInput>;

export default ServiceDomainUpdateWithWhereUniqueWithoutDomainInputSchema;
