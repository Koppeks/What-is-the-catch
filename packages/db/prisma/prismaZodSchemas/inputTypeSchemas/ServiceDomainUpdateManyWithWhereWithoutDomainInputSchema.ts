import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainScalarWhereInputSchema } from './ServiceDomainScalarWhereInputSchema';
import { ServiceDomainUpdateManyMutationInputSchema } from './ServiceDomainUpdateManyMutationInputSchema';
import { ServiceDomainUncheckedUpdateManyWithoutDomainInputSchema } from './ServiceDomainUncheckedUpdateManyWithoutDomainInputSchema';

export const ServiceDomainUpdateManyWithWhereWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainUpdateManyWithWhereWithoutDomainInput> = z.object({
  where: z.lazy(() => ServiceDomainScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServiceDomainUpdateManyMutationInputSchema),z.lazy(() => ServiceDomainUncheckedUpdateManyWithoutDomainInputSchema) ]),
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateManyWithWhereWithoutDomainInput>;

export default ServiceDomainUpdateManyWithWhereWithoutDomainInputSchema;
