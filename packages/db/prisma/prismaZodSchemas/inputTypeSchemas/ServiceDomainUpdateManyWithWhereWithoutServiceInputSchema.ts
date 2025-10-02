import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainScalarWhereInputSchema } from './ServiceDomainScalarWhereInputSchema';
import { ServiceDomainUpdateManyMutationInputSchema } from './ServiceDomainUpdateManyMutationInputSchema';
import { ServiceDomainUncheckedUpdateManyWithoutServiceInputSchema } from './ServiceDomainUncheckedUpdateManyWithoutServiceInputSchema';

export const ServiceDomainUpdateManyWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.ServiceDomainUpdateManyWithWhereWithoutServiceInput> = z.strictObject({
  where: z.lazy(() => ServiceDomainScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServiceDomainUpdateManyMutationInputSchema), z.lazy(() => ServiceDomainUncheckedUpdateManyWithoutServiceInputSchema) ]),
});

export default ServiceDomainUpdateManyWithWhereWithoutServiceInputSchema;
