import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCreateNestedOneWithoutServiceDomainInputSchema } from './ServiceCreateNestedOneWithoutServiceDomainInputSchema';
import { DomainCreateNestedOneWithoutServiceDomainInputSchema } from './DomainCreateNestedOneWithoutServiceDomainInputSchema';

export const ServiceDomainCreateInputSchema: z.ZodType<Prisma.ServiceDomainCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  pathPattern: z.string().optional().nullable(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutServiceDomainInputSchema),
  domain: z.lazy(() => DomainCreateNestedOneWithoutServiceDomainInputSchema),
});

export default ServiceDomainCreateInputSchema;
