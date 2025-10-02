import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainScalarWhereInputSchema } from './ServiceDomainScalarWhereInputSchema';
import { ServiceDomainUpdateManyMutationInputSchema } from './ServiceDomainUpdateManyMutationInputSchema';
import { ServiceDomainUncheckedUpdateManyWithoutDomainInputSchema } from './ServiceDomainUncheckedUpdateManyWithoutDomainInputSchema';

export const ServiceDomainUpdateManyWithWhereWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainUpdateManyWithWhereWithoutDomainInput> = z.strictObject({
  where: z.lazy(() => ServiceDomainScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServiceDomainUpdateManyMutationInputSchema), z.lazy(() => ServiceDomainUncheckedUpdateManyWithoutDomainInputSchema) ]),
});

export default ServiceDomainUpdateManyWithWhereWithoutDomainInputSchema;
