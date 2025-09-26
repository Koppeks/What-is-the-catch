import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainScalarWhereInputSchema } from './ServiceDomainScalarWhereInputSchema';
import { ServiceDomainUpdateManyMutationInputSchema } from './ServiceDomainUpdateManyMutationInputSchema';
import { ServiceDomainUncheckedUpdateManyWithoutServiceInputSchema } from './ServiceDomainUncheckedUpdateManyWithoutServiceInputSchema';

export const ServiceDomainUpdateManyWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainUpdateManyWithWhereWithoutServiceInput> = z.object({
  where: z.lazy(() => ServiceDomainScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServiceDomainUpdateManyMutationInputSchema),z.lazy(() => ServiceDomainUncheckedUpdateManyWithoutServiceInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateManyWithWhereWithoutServiceInput>;

export default ServiceDomainUpdateManyWithWhereWithoutServiceInputSchema;
