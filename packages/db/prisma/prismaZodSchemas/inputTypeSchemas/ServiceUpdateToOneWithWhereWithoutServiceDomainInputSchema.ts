import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';
import { ServiceUpdateWithoutServiceDomainInputSchema } from './ServiceUpdateWithoutServiceDomainInputSchema';
import { ServiceUncheckedUpdateWithoutServiceDomainInputSchema } from './ServiceUncheckedUpdateWithoutServiceDomainInputSchema';

export const ServiceUpdateToOneWithWhereWithoutServiceDomainInputSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutServiceDomainInput> = z.strictObject({
  where: z.lazy(() => ServiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutServiceDomainInputSchema), z.lazy(() => ServiceUncheckedUpdateWithoutServiceDomainInputSchema) ]),
});

export default ServiceUpdateToOneWithWhereWithoutServiceDomainInputSchema;
