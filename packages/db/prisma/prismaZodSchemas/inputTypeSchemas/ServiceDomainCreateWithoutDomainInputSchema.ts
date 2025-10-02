import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateNestedOneWithoutServiceDomainInputSchema } from './ServiceCreateNestedOneWithoutServiceDomainInputSchema';

export const ServiceDomainCreateWithoutDomainInputSchema: z.ZodType<Prisma.ServiceDomainCreateWithoutDomainInput> = z.strictObject({
  id: z.cuid().optional(),
  pathPattern: z.string().optional().nullable(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutServiceDomainInputSchema),
});

export default ServiceDomainCreateWithoutDomainInputSchema;
